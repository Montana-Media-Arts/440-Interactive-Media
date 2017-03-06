function Ball(init_x, init_y) {
    this.x = init_x;
    this.y = init_y;

    this.velocity = 0;
    this.acceleration = 80;
    this.groundFriction = 0.9;

    this.ball_diam = 30;
    this.ball_color = color(30, 70, 170);
}

Ball.prototype.frame = function () {
    this.move();
    this.checkGround();
    this.display();
};


Ball.prototype.move = function() {
    this.velocity += this.acceleration;
    this.y += this.velocity;
};

Ball.prototype.checkGround = function () {
    if (this.y >= height) {
        this.velocity *= this.groundFriction;
        this.velocity *= -1;
        this.y = height - 1;
    }
};

Ball.prototype.display = function () {

    push();

    fill(this.ball_color);
    ellipse(this.x, this.y, this.ball_diam, this.ball_diam);

    pop();
};
