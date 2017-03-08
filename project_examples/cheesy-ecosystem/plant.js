function Plant(pos_x, pos_y){
    this.pos = createVector(pos_x,pos_y);

    this.size = 1;
    this.canGrow = true;
    this.locs = [[0,0]];
    this.born = Date.now();
    this.age = 0;
}

Plant.prototype.frame = function(){
    this.draw();
    this.grow();
};

Plant.prototype.draw = function () {
    push();

    translate(this.pos.x,this.pos.y);

    for (var i = 0; i < this.size; i++) {
        push();
        translate(this.locs[i][0], this.locs[i][1]);
        // draw our plant
        noStroke();
        fill(255, 127, 34);
        triangle(0,0,-5,-30,5,-30);
        pop();
    }
    pop();
};

Plant.prototype.grow = function(){
    // Plant can grow
    this.age = floor((Date.now() - this.born)/1000);

    if (this.age % 7 === 0 && this.canGrow) {
        this.size++;
        this.locs.push([random(-15, 15), random(-10, 10)]);
        this.canGrow = false;
    } else if (this.age % 7 !== 0) {
        this.canGrow = true;
    }
};
