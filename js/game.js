function Game(canvas) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 800;
    this.canvas.height = 400;

    this.reset();
    
}

Game.prototype.start = function() {
    this.interval = setInterval(function() {
        this.clear();
        
        this.draw();
    }.bind(this), 1000/60) //this z setInterval jest poza scope game wiec trzeba jemu to przypomiec stosujac .bind
}


Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.draw = function() {
    this.background.draw();

}

Game.prototype.reset = function() {
    this.background = new Background(this);
    
}