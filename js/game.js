function Game(canvas) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth - 20;
    this.canvas.height = window.innerHeight - 20;
    this.img = new Images();
    this.newGame();    
   
}

Game.prototype.start = function() {
    this.interval = setInterval(function () {
        this.clear();
        this.draw();
        this.move();

        this.player.setListeners();
        this.collectGoodies();

        this.framesCounter++;
        if (this.framesCounter > 1000) {
            this.framesCounter = 0;
        }
        if (this.framesCounter % 10 === 0) {
            this.createGoodies(this.img.juice);
        }
        if (this.framesCounter % 50 === 0) {
            this.createGoodies(this.img.walnuts);
        }
        if (this.framesCounter % 60 === 0) {
            this.createGoodies(this.img.orange);
        }
    }.bind(this), 1000 / 60) //this z setInterval jest poza scope game wiec trzeba jemu to przypomiec stosujac .bind
}



Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.draw = function() {
    this.background.draw();
    this.player.draw();
    this.goodies.forEach(function(goodie) {
        goodie.draw();
    })
}

Game.prototype.move = function() {
    this.goodies.forEach(function(goodie) {
        goodie.move();
    })  
}

Game.prototype.newGame = function() {
    this.background = new Background(this);
    this.player = new Player(this);
    this.goodies = [];
    this.framesCounter = 0;
}

Game.prototype.createGoodies = function(img) {
    this.goodies.push(new Goodies(this, img))
}

Game.prototype.collectGoodies = function () {
    this.goodies = this.goodies.filter(function(goodie) {
        return !(
            (this.player.x + this.player.weight) >= goodie.x &&
            (goodie.x + goodie.weight) > this.player.x &&
            (this.player.y + this.player.height) > goodie.y &&
            (goodie.y + goodie.height) > this.player.y)
    }.bind(this));
}


