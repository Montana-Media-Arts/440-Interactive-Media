// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var gaussArr;
var lpf = new LPF();

function setup() {
  createCanvas(1000,360);
  background(127);
  gaussArr = new Array(width);
  gaussArr.fill(0);
}

function draw() {


  for (var i = 0; i < 100; i++) {
    // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
    var xloc = randomGaussian();

    var sd = width/8;                // Define a standard deviation
    var mean = width/2;         // Define a mean value (middle of the screen along the x-axis)
    xloc = ( xloc * sd ) + mean;  // Scale the gaussian random number by standard deviation and mean

    xloc = floor(xloc);
    if (xloc >= 0 && xloc <= width && Number.isFinite(xloc)) {
      gaussArr[xloc]++;
    }

  }

  var max2 = Math.max(...gaussArr);
  console.log(max2);
  gaussArr = gaussArr / max2;
  gaussArr = gaussArr * (height-10);

  stroke(0);
  for (var i = 0; i < gaussArr.length; i++) {
    line(i,height-10,i,height-10-gaussArr[i]);
  }


  lpf.smoothing = 0.2;
  var smoothArr = gaussArr.slice();
  lpf.smoothArray(smoothArr);
  lpf.smoothArray(smoothArr);
  lpf.smoothArray(smoothArr);

  push();
  fill(255, 0);
  stroke(0, 255, 0);
  beginShape();
  for (var i = 0; i < smoothArr.length; i++) {
    vertex(i,height-10-smoothArr[i]);
  }
  endShape(CLOSE);
  pop();



  var element = document.getElementById('display');
  // Set the html of the element
  element.innerHTML = smoothArr;

}
