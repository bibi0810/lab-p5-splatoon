class Game {
  constructor() {
    this.player = new Player(0, 0, true);
    this.player2 = new Player(540, 540);
  }

  setup() {
    this.player.setup();
    this.player2.setup();
  }

  draw() {
    this.player.draw();
    this.player2.draw();
    this.drawGrid();
  }
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let i = 0; i <= 600; i += 60) {
      line(0, i, 600, i);
      line(i, 0, i, 600);
    }
  }
}
class Player {
  constructor(col, row, p1) {
    this.col = col;
    this.row = row;
    this.p1 = p1;
    this.img = "";
    this.img2 = "";
  }

  setup() {
    this.img = loadImage("../assets/mario.ico");
    this.img2 = loadImage("../assets/luigi.png");
  }

  moveUp() {
    this.col -= 60;
  }
  moveDown() {
    this.col += 60;
  }
  moveLeft() {
    this.row -= 60;
  }
  moveRight() {
    this.row += 60;
  }
  draw() {
    //fill(200)
    //rect(this.row, this.col,60,60)

    if (this.p1) image(this.img, this.row, this.col, 60, 60);
    else image(this.img2, this.row, this.col, 60, 60);
  }
  keyPressed() {
    if (keyCode === LEFT_ARROW) {
      this.moveLeft();
    } else if (keyCode === RIGHT_ARROW) {
      this.moveRight();
    } else if (keyCode === UP_ARROW) {
      this.moveUp();
    } else if (keyCode === DOWN_ARROW) {
      this.moveDown();
    }
  }

  keyPressed2() {
    if (keyCode === 65) {
      //S
      this.moveLeft();
    } else if (keyCode === 68) {
      //D
      this.moveRight();
    } else if (keyCode === 87) {
      //W
      this.moveUp();
    } else if (keyCode === 83) {
      //A
      this.moveDown();
    }
  }
}
