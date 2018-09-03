function Player(game) {
    this.game = game;
    this.x = this.game.canvas.width * 0.1;
    this.y0 = this.game.canvas.height * 0.35;
    this.y = this.y0;

    this.img = new Image();
    this.img.src = "img/redHood.png"

    this.img.frames = 3;
    this.img.frameIndex = 0;

    this.weight = 120;
    this.height = 175;

    this.vy = 1;

}

Player.prototype.draw = function () {
    this.game.ctx.drawImage(
        this.img,
        this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
        0,
        Math.floor(this.img.width / this.img.frames),
        this.img.height,
        this.x,
        this.y,
        this.weight,
        this.height,
        this.vx = 1,

    );

    this.animateImg();  
}

var TOP_KEY = 38;
var LEFT_KEY = 39;
var RIGHT_KEY = 37;
var DOWN_KEY = 40;

Player.prototype.setListeners = function () {
    document.onkeydown = function (event)  {
        switch (event.keyCode) {
            case LEFT_KEY: 
                this.x += 5;
                this.vx += 10;
                break;
            case RIGHT_KEY:
                this.x -= 5;
                this.vx -= 10;
                break;
           
            }
    }.bind(this)
}

Player.prototype.animateImg = function() {
    if (this.game.framesCounter % 20 === 0) {
        this.img.frameIndex += 1;
        if (this.img.frameIndex > 2) this.img.frameIndex = 0;
    }   
    
}


