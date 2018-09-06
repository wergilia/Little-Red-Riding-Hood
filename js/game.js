function Game(canvas) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth - 20;
    this.canvas.height = window.innerHeight - 20;
    this.img = new Images();
    this.newGame();
}

Game.prototype.start = function() {
    this.interval = setInterval(function() {
        this.clear();
        this.draw();
        this.move();
        this.player.setListeners();
        this.collectGoodies();
        this.printGoodies();
    }.bind(this), 1000 / 60) //this z setInterval jest poza scope game wiec trzeba jemu to przypomiec stosujac .bind
}

Game.prototype.printGoodies = function() {
    if (this.framesCounter % 300 === 0) {
        this.createGoodies(this.img.juice);
    }
    if (this.framesCounter % 260 === 0) {
        this.createGoodies(this.img.walnut);
    }
    if (this.framesCounter % 220 === 0) {
        this.createGoodies(this.img.orange);
    }
    if (this.framesCounter % 180 === 0) {
        this.createGoodies(this.img.pierogi);
    }
    if (this.framesCounter % 260 === 0) {
        this.createGoodies(this.img.soup);
    }
    if (this.framesCounter % 220 === 0) {
        this.createGoodies(this.img.pear);
    }
    if (this.framesCounter % 220 === 0) {
        this.createGoodies(this.img.bread);
    }
    if (this.framesCounter % 320 === 0) {
        this.createGoodies(this.img.cake);
    }
}

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.draw = function() {
    this.background.draw();
    this.player.draw();
    this.framesCounter++;
    if (this.framesCounter > 1000) {
        this.framesCounter = 0;
    }
    this.goodies.forEach(function(goodie) {
        goodie.draw();
    });
   
    this.drawScore();
}

Game.prototype.move = function() {
    this.goodies.forEach(function(goodie) {
        goodie.move();
    })
}

Game.prototype.newGame = function() {
    this.background = new Background(this);
    this.player = new Player(this);
    //this.audio = new Audio(this);
    //this.audio.play();
    this.goodies = [];
    this.framesCounter = 0;
    this.score = 0;
}

Game.prototype.createGoodies = function(img) {
    this.goodies.push(new Goodies(this, img))
}

Game.prototype.collectGoodies = function() {
    this.goodies = this.goodies.filter(function(goodie) {
        var isCollision = ((this.player.x + this.player.weight) >= goodie.x &&
            (goodie.x + goodie.weight) > this.player.x &&
            (this.player.y + this.player.height) > goodie.y &&
            (goodie.y + goodie.height) > this.player.y)
            if (isCollision === true) {
                this.score += 10;
            }
            return !isCollision && !goodie.delete;            
    }.bind(this));
}

Game.prototype.drawScore = function() {
    var x = this.canvas.width * 0.85;
    var y = this.canvas.height * 0.1;
    this.ctx.font = "50px bold georgia";
    this.ctx.fillStyle = "darkblue";
    this.ctx.fillText(Math.floor(this.score), x, y);
}


