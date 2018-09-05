var Goodies = function (game) {
    this.game = game;

    this.y = this.game.canvas.height * 0.01;
    this.x = this.game.canvas.width * Math.random(0.9);
    // this.img = new Image();
    // this.img.src = "img/pear.jpg";
    this.img = new Image();
    this.img.src = "img/bread.png";

    this.weight = 50;
    this.height = 50;

    this.vy = 2;
    
}


Goodies.prototype.draw = function () {
    this.game.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.weight,
        this.height,
    );
}

Goodies.prototype.move = function () {
    if (this.y + this.height <= this.game.player.height + this.game.player.y) {
        this.y += this.vy;
    }
}

