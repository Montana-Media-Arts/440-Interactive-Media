function Herbi(pos_x, pos_y){
    this.pos = createVector(pos_x,pos_y);
    this.velocity = createVector(0, 0);
    this.accel = createVector(0, 0);
    this.maxSpeed = 10;
    this.size = 1;
    this.maxSize = 10;
    this.born = Date.now();
    this.age = 0;
    this.maxAge = 300;
    this.minWidth = 30;
    this.maxWidth = 60;
    this.canGrow = true;
    this.maxFoodDist = 200;
}

Herbi.prototype.frame = function (foodArr) {
    this.draw();
    this.grow();
    this.lookForFood(foodArr);
    this.move();
};


Herbi.prototype.move = function() {

    var moveAmt = p5.Vector.random2D();
    moveAmt.mult(0.5);



    this.accel = moveAmt;
    this.velocity.add(this.accel);
    this.velocity.limit(this.maxSpeed);

    this.checkBounds();

    this.pos.add(this.velocity);

};

Herbi.prototype.checkBounds = function(){
    if (this.pos.x >= width ) {
        this.velocity.x = 0;
        this.accel.x *= -1;
        this.pos.x = width-2;
    } else if ( this.pos.x <= 0 ) {
        this.velocity.x = 0;
        this.accel.x *= -1;
        this.pos.x = 2;

    } else if ( this.pos.y >= height ) {
        this.velocity.y = 0;
        this.accel.y *= -1;
        this.pos.y = height-2;

    } else if ( this.pos.y <= 0) {
        this.velocity.y = 0;
        this.accel.y *= -1;
        this.pos.y = 2;
    }
};


Herbi.prototype.lookForFood = function(foodArr){

    for (var i = 0; i < foodArr.length; i++) {
        var food = foodArr[i];


        var foodDist = p5.Vector.dist(food.pos,this.pos);

        textSize(50);
        text(foodDist, 50, 50);


        if (foodDist <= this.maxFoodDist) {
            this.myFood = food;
            text("food!", 50, 50);
        }
    }

};

Herbi.prototype.draw = function() {

    var heading = this.velocity.heading()-HALF_PI;

    push();


    translate(this.pos.x, this.pos.y);

    rotate(heading);
    rectMode(CENTER);
    var thingWidth = map(this.size, 0, this.maxSize, this.minWidth, this.maxWidth);
    var thingHeight = thingWidth * 0.3;
    rect(0, 0, thingWidth, thingHeight);

    stroke(200, 0, 0);
    line(-thingWidth/2, 0, thingWidth/2, 0);
    line(-thingWidth/2, thingHeight/4, thingWidth/2, thingHeight/4);

    pop();
};

Herbi.prototype.grow = function(){
    var growRate = 11;

    // Herbi can grow
    this.age = floor((Date.now() - this.born)/1000);


    if (this.age % growRate === 0 && this.canGrow) {
        this.size++;

        this.canGrow = false;
    } else if (this.age % growRate !== 0) {
        this.canGrow = true;
    }
};
