function Game(canvas) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth - 20;
    this.canvas.height = window.innerHeight - 20;

    this.reset();
    
}

Game.prototype.start = function() {
    this.interval = setInterval(function() {
        this.clear();
        this.draw();

        this.player.setListeners();

        this.framesCounter++;
        if (this.framesCounter > 1000) {
            this.frameCounter = 0;

        }
        
        
    }.bind(this), 1000/60) //this z setInterval jest poza scope game wiec trzeba jemu to przypomiec stosujac .bind
}


Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.draw = function() {
    this.background.draw();
    this.player.draw();

}

Game.prototype.reset = function() {
    this.background = new Background(this);
    this.player = new Player(this);
    this.framesCounter = 0;
    
}