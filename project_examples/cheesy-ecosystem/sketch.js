
// global variables
var bg_col;

var carrots = [];
var herbis = [];
var omnis = [];


function setup() {
    createCanvas(windowWidth,windowHeight);
    bg_col = color(127, 165, 189);
    background(bg_col);

	omnis.push( new Omni(random(width), random(height)) );

	for (var i = 0; i < 3; i++) {
		herbis.push( new Herbi(random(width), random(height)) );
	}

	for (var i = 0; i < 15; i++) {
		carrots.push( new Plant(random(width), random(height)) );
	}
}

function draw() {
    background(bg_col);



    carrots.forEach( function(carrot, idx){
        carrot.frame();
    });

    herbis.forEach( function(herbi, idx){
        herbi.frame( carrots, omnis );
    });

	omnis.forEach( function(omni, idx){
		omni.frame( herbis );
	} );

}
