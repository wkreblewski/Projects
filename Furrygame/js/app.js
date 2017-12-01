// Zadanie 4
// konstruktor Furry
var Furry = function Furry() {
  this.x = 0;
  this.y = 0;
  this.direction = "right";
};

// konstruktor Coin
var Coin = function Coin() {
  this.x = Math.floor(Math.random() * 10);
  this.y = Math.floor(Math.random() * 10);
};

// Zadanie 5. Przygotowanie obiektu zarządzającego grą.
// konstruktor Game
var Game = function Game() {
  // this.continue = true;
  // var me = this;
  this.board = document.querySelectorAll("#board > div");
  this.furry = new Furry();
  this.coin =  new Coin();
  this.score = 0;

  // Zadanie 6 - metoda przeliczająca pozycje x i y
  this.index = function(x,y) {
    return x + (y * 10);
  }

  // Zadanie 7. Rysowanie stanu planszy.
  // metoda showFurry POKAZUJE FURREGO
  this.showFurry = function() {
    this.board[this.index(this.furry.x,this.furry.y)].classList.add('furry');
  }
  // metoda showCoin POKAZUJE COIN
  this.showCoin = function() {
    this.board[this.index(this.coin.x,this.coin.y)].classList.add('coin');
  }

  // Zadanie 8. Start
  // metoda startGame
  this.startGame = function(){
    var self = this;
      this.idSetInterval = setInterval(function(){
        // console.log("hura");
        self.hideVisibleFurry();
        self.moveFurry();
      },250);
    }

  // Zadanie 9. Modyfikacja pozycji Furry'ego zależnie od kierunku.
    this.moveFurry = function() {
      if(this.furry.direction === "right") {
          this.furry.x = this.furry.x + 1;
      } else if ( this.furry.direction === "left" ) {
          this.furry.x = this.furry.x -1;
      } else if ( this.furry.direction === "up") {
        this.furry.y = this.furry.y -1;
      } else if ( this.furry.direction === "down") {
        this.furry.y = this.furry.y +1;
      }
      this.showFurry();
      this.checkCoinCollision();
      this.gameOver();
    }

  // Zadanie 9. Czyszczenie widoku - usuwanie niepotrzebnych klas.
    this.hideVisibleFurry = function() {
      var div = document.querySelector(".furry");
      div.classList.remove("furry");
    }

  // Zadanie 10. Obsługa klawiatury.
  // obserwacja eventu keydown
  this.turnFurry = function(event) {
    switch (event.which) {
      case 37:
        this.furry.direction = "left";
        break;
      case 38:
        this.furry.direction = "up";
        break;
      case 39:
        this.furry.direction = "right";
        break;
      case 40:
        this.furry.direction = "down";
        break;
    }
  }

    document.addEventListener('keydown', function(event){
      game.turnFurry(event);
});

  // Zadanie 11. Sprawdzanie kolizji z monetą.
  this.checkCoinCollision = function(){
    if(this.furry.x === this.coin.x && this.coin.y === this.furry.y) {
      document.querySelector("div.coin").classList.remove("coin");
      this.score++;
      document.querySelector("#score div strong").innerText = this.score;
      this.coin = new Coin();
      this.showCoin();
      // gratulacje
      alert("YOU ROCK! KEEP GOING!");
    }
  }

  // 12. Sprawdzanie kolizji ze ścianą.
  this.gameOver = function() {
    if(this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9){
      clearInterval(this.idSetInterval);
      game.hideVisibleFurry();
      // komunikat game over
      alert("GAME OVER. TRY TO CATCH THE BALL :)");
      }
    }

}


var game = new Game();
game.showFurry();
game.showCoin();
// Zadanie 8
game.startGame();
// Zadanie 9
