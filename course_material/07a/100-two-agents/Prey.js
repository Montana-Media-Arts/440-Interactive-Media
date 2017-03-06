function Prey(init_x, init_y, predator) {
    this.location = createVector(init_x,init_y);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.maxspeed = 5;
    this.pred = predator;
    this.randTimer = 10;
    this.currTime = 0;
}

Prey.prototype.updatePredator = function (predator) {
    if (predator) {
        this.pred = predator;
    } else {
        this.pred = null;
    }
};

Prey.prototype.trackPrey = function () {
    // var predPos = createVector(mouseX, mouseY);


    var predPos = this.pred.location.copy();


    var dist = predPos.dist(this.location);

    text(p5.Vector.angleBetween(this.location, predPos), 20, 20);

    if (dist <= 150) {
        predPos.normalize();

        predPos.rotate(PI);

        this.acceleration = predPos;

        this.currTime = this.randTimer;
    } else {
        this.currTime++;
        if (this.currTime >= this.randTimer) {
            this.randTimer = random(20, 240);
            this.currTime = 0;
            this.newRandAngle();
        }

    }


    this.checkBoundary();

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.location.add(this.velocity);

    this.location.x = constrain(this.location.x,0,width);
    this.location.y = constrain(this.location.y,0,height);


};

Prey.prototype.newRandAngle = function(){
    this.acceleration = p5.Vector.random2D().mult(0.1);
    console.log(this.acceleration);
};

Prey.prototype.checkBoundary = function() {
    if (this.location.x >= width || this.location.x <= 0) {
        this.velocity.x = 0;
        this.acceleration.x *= -1;
    }

    if (this.location.y >= height || this.location.y <= 0) {
        this.velocity.y = 0;
        this.acceleration.y *= -1;
    }
};


Prey.prototype.display = function() {
    push();
    fill(20, 40, 200);
    ellipse(this.location.x, this.location.y, 40, 40);
    pop();
};
