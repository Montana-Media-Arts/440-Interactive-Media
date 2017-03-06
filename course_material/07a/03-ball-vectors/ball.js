function Ball(init_x, init_y) {

    // create a parameter to represent location
    this.loc = createVector(init_x, init_y);


    this.acceleration = createVector(0, 1);
    this.velocity = createVector(0, 0);

    this.groundFriction = 0.95;

    this.ball_diam = 30;
    this.ball_color = color(30, 70, 170);
}

Ball.prototype.frame = function () {

    this.info();

    this.move();
    this.checkGround();
    this.checkWalls();
    this.display();
};

Ball.prototype.info = function() {
    console.log(this.acceleration);
};

Ball.prototype.move = function() {

    this.velocity.add(this.acceleration);

    this.loc.add(this.velocity);

};

Ball.prototype.checkGround = function () {
    if (this.loc.y >= height) {
        this.velocity.mult(this.groundFriction);
        this.velocity.y *= -1;
        // this.velocity.rotate(PI);
        this.loc.y = height - 1;
    }
};

Ball.prototype.checkWalls = function(){
    if (this.loc.x >= width) {
        this.loc.x = width-1;
        this.acceleration.x = 0;
        this.velocity.x *= -1;
    }
    if (this.loc.x <= 0) {
        this.loc.x = 1;
        this.acceleration.x = 0;
        this.velocity.x *= -1;

    }
};

Ball.prototype.force = function(vectorForce){
    this.acceleration.add(vectorForce);
};


Ball.prototype.display = function () {

    push();

    fill(this.ball_color);
    ellipse(this.loc.x, this.loc.y, this.ball_diam, this.ball_diam);

    pop();
};
