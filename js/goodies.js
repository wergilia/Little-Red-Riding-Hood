var Goodies = function(game,img) {
    this.game = game;
    this.img = img;
    this.y = this.game.canvas.height * 0.01;
    this.x = this.game.canvas.width * Math.random(0.9);     
    this.weight = this.game.canvas.width * 0.05;
    this.height = this.game.canvas.height * 0.08;
    this.vy = 2;
    this.delete = false;
    this.setTimeout = false;  
}
    
Goodies.prototype.draw = function() { 
    this.game.ctx.drawImage(    
        this.img,
        this.x,
        this.y,
        this.weight,
        this.height);   
}

Goodies.prototype.move = function() {    
    if (this.y + this.height <= this.game.player.height + this.game.player.y) {
        this.y += this.vy;
    } else if (this.setTimeout == false) {
        this.setTimeout = setTimeout(function() {
            this.delete = true;
        }.bind(this),1000);
    }
}

