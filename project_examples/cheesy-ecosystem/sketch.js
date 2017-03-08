
// global variables
var bg_col;

var carrots = [];
var herbis = [];

function setup() {
    createCanvas(windowWidth,windowHeight);
    bg_col = color(127, 165, 189);
    background(bg_col);

    herbis.push( new Herbi(random(width), random(height)) );

    carrots.push( new Plant(random(width), random(height)) );
}

function draw() {
    background(bg_col);



    carrots.forEach( function(carrot, idx){
        carrot.frame();
    });

    herbis.forEach( function(herbi, idx){
        herbi.frame( carrots );
    });


}
