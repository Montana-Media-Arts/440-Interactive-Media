
function Predator(init_x, init_y, prey){
    this.location = createVector(init_x,init_y);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.maxspeed = 3;
    this.prey = prey;
}

Predator.prototype.updatePrey = function (prey) {
    if (prey) {
        this.prey = prey;
    } else {
        this.prey = null;
    }
};

Predator.prototype.trackPrey = function () {
    // var preyPos = createVector(mouseX, mouseY);


    var preyPos = prey.location.copy();


    preyPos.sub(this.location.x,this.location.y);

    preyPos.normalize();

    this.acceleration = preyPos;


    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.location.add(this.velocity);
};

Predator.prototype.display = function() {
    ellipse(this.location.x, this.location.y, 40, 40);
};
