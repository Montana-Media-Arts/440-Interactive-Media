function Omni(pos_x, pos_y){
    this.pos = createVector(pos_x,pos_y);
    this.velocity = createVector(0, 0);
    this.accel = createVector(0, 0);
    this.maxSpeed = 2;
    this.size = 1;
    this.maxSize = 10;
    this.born = Date.now();
    this.age = 0;
    this.maxAge = 300;
    this.minWidth = 30;
    this.maxWidth = 60;
    this.canGrow = true;
    this.maxFoodDist = 200;
	this.eating = false;
	this.timeEating = 0;
	this.myFood = false;
}

Omni.prototype.frame = function (foodArr) {
    this.draw();
    this.grow();
    this.lookForFood(foodArr);
	this.eat();
    this.move();
};


Omni.prototype.move = function() {

	var moveAmt;
	var mult = 1;

	if (this.myFood) {
		// text(this.myFood, 100, 100);

		moveAmt = p5.Vector.sub(this.myFood.pos, this.pos);
		var dist = moveAmt.mag();

		moveAmt.normalize();

		mult = constrain(map(dist, 0, 30, 0, 1), 0, 1);

	} else {
		moveAmt = p5.Vector.random2D();
		moveAmt.mult(0.5);
	}

    this.accel = moveAmt;
    this.velocity.add(this.accel);
	this.velocity.mult(mult);
	this.velocity.limit(this.maxSpeed);

    this.checkBounds();

    this.pos.add(this.velocity);

};

Omni.prototype.checkBounds = function(){
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


Omni.prototype.lookForFood = function(foodArr){

    for (var i = 0; i < foodArr.length; i++) {
        var food = foodArr[i];


        var foodDist = p5.Vector.dist(food.pos,this.pos);

        textSize(50);
        // text(foodDist, 50, 50);


        if (foodDist <= this.maxFoodDist && food.size >= 2) {
            this.myFood = food;
            // text("food!", 50, 50);
        }
    }

};

Omni.prototype.eat = function(){
	if (this.myFood) {
		if ( p5.Vector.dist(this.pos, this.myFood.pos) <= 1 ) {
			// text("Im on food", 100, 100);
			this.eating = true;
		}
	}

	if (this.eating) {
		this.timeEating++;
		if (this.timeEating % 120 === 0) {
			this.myFood.size--;
			this.size++;
		}
		if (this.myFood.size <= 0) {
			this.eating = false;
			this.timeEating = 0;
			this.myFood = false;
		}
	}
}

Omni.prototype.draw = function() {

    push();

    translate(this.pos.x, this.pos.y);

	var heading = this.velocity.heading();
	rotate(heading + HALF_PI);


    var thingWidth = map(this.size, 0, this.maxSize, this.minWidth, this.maxWidth);
    var thingHeight = thingWidth * 2.6;

	fill(200, 37, 95);
	push();
	scale(1, -1);
    arc(0, 0, thingWidth, thingHeight, 0, PI, CHORD);
	pop();

	fill(2, 60, 127);
	var eye_x = thingWidth * 0.165;
	var eye_y = thingHeight * -0.3;
	var eye_size = thingWidth * 0.125;
	ellipse(-eye_x, eye_y, eye_size, eye_size);
	ellipse(eye_x, eye_y, eye_size, eye_size);

    pop();
};

Omni.prototype.grow = function(){
    var growRate = 11;

    // Omni can grow
    this.age = floor((Date.now() - this.born)/1000);


    if (this.age % growRate === 0 && this.canGrow) {
        this.size++;

        this.canGrow = false;
    } else if (this.age % growRate !== 0) {
        this.canGrow = true;
    }
};
