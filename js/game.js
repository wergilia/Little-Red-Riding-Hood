function Game(canvas) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth - 20;
    this.canvas.height = window.innerHeight - 20;
    this.newGame();
    this.img = new Images(this);
    this.sound = new Audio("audio/bigBadWolf.mp3"); 
}

Game.prototype.start = function() {
    this.time = new Date();
    this.interval = setInterval(function() {
        this.framesCounter++;
        this.clear();        
        this.draw();
        this.move();
        this.player.setListeners();
        this.collectGoodies();
        this.printGoodies();
        this.drawScore();
        this.gameOver();
        this.sound.play();
    }.bind(this), 1000 / 60) 
}

Game.prototype.printGoodies = function(img) {
    this.img.createGoodies();
}

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.draw = function() {
    this.background.draw();
    this.player.draw();
    if (this.framesCounter > 1000) {
        this.framesCounter = 0;
    }
    this.goodies.forEach(function(goodie) {
        goodie.draw();
    });
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
    this.score = 0;
}

Game.prototype.createGoodies = function(img) {
    this.goodies.push(new Goodies(this, img))
}

Game.prototype.collectGoodies = function() {
    this.goodies = this.goodies.filter(function(goodie) {
        var isCollision = ((this.player.x + this.player.width) >= goodie.x &&
            (goodie.x + goodie.width) > this.player.x &&
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

Game.prototype.stop = function() {
    clearInterval(this.interval);
}

Game.prototype.gameOver = function() {
        var now = new Date();
        if (now.getTime() - this.time.getTime() > 15000 && this.score < 100){
            this.stop();
            $(".container").css("display","flex")
            $(".container")[0].innerHTML = "YOU'VE LOST! <br> SCORE: " + this.score;
        } else if(this.score == 250) {
            this.stop();
            $(".container").css("display","flex")
            $(".container")[0].innerHTML = "YOU WIN";
        }
}


