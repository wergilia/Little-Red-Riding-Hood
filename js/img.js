var Images = function (game) {
    this.game = game;
    this.bread = new Image();
    this.bread.src = "img/bread.png";
    this.juice = new Image();
    this.juice.src = "img/juice.png";
    this.orange = new Image();    
    this.orange.src = "img/orange.png";
    this.pierogi = new Image();
    this.pierogi.src = "img/pierogi.png";
    this.cake = new Image();
    this.cake.src = "img/cake.png";
    this.soup = new Image();
    this.soup.src = "img/soup.png";
    this.walnut = new Image();
    this.walnut.src = "img/walnut.png";
    this.pear = new Image();
    this.pear.src = "img/pear.png";
}
Images.prototype.createGoodies = function () {
    console.log(this.game.framesCounter % 500)
    if (this.game.framesCounter % 60 == 0) {
        this.game.createGoodies(this.switch(this.bread, this.juice, this.orange, this.cake))
    } else if (this.game.framesCounter % 30 == 0) {
        this.game.createGoodies(this.switch(this.pierogi, this.soup, this.walnut, this.pear))
    }
}
Images.prototype.switch = function(goodie, goodie1, goodie2, goodie3){
    var img;

    var random = Math.floor(Math.random() * 4)
        switch (random) {
            case 0: {
                img = goodie;
                break;
            }
            case 1: {
                img = goodie1;
                break;
            }
            case 2: {
                img = goodie2;
                break;
            }
            case 3: {
                img = goodie3;
                break;
            }
        }
    return img;
}