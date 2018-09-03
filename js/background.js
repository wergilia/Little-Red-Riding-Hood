function Background(game) {
    this.game = game;
  
    this.background = new Image();
    this.background.src = "img/kitchen.png";
  
    this.x = 0;
    this.y = 0;    
  }
  
  Background.prototype.draw = function() {
    this.game.ctx.drawImage(
      this.background, 
      this.x, 
      this.y, 
      this.game.canvas.width, 
      this.game.canvas.height);

  };