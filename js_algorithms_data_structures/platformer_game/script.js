// Access HTML Elements
const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");
const checkpointMessage = document.querySelector(".checkpoint-screen > p");

// Setup Canvas API
const ctx = canvas.getContex("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

// Game Function variables
const gravity = 0.5;
let isCheckpointCollisionDetectionActive = true;

// Determine Game Layout Based on Screen Size
const proportionalSize = size => innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size;

// Player Characteristics
class Player {
  constructor() {
    this.position = {
      x: proportionalSize(10),
      y: proportionalSize(400)
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = proportionalSize(40);
    this.height = proportionalSize(40);
  }

  draw() {
    ctx.fillStyle = "#99c9ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      if (this.position.y < 0) {
        this.position.y = 0;
        this.velocity.y = gravity;
      }
      this.velocity.y = gravity;
    } else {
      this.velocity.y = 0;
    }

    if (this.position.x < this.width) {
      this.position.x = this.width;
    }

    if (this.position.x >= canvas.width - 2 * this.width) {
      this.position.x = canvas.width - 2 * this.width;
    }
  }
}

// Create Player Instance
const player = Player();

// Game Functions
const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();

  if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
    player.velocity.x = 5;
  } else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
  }
}

const keys = {
  rightKey: {
    pressed: false
  },
  leftKey: {
    pressed: false
  }
}

const movePlayer = (key, xVelocity, isPressed) => {
  if (!isCheckpointCollisionDetectionActive) {
    player.velocity.x = 0;
    player.velocity.y = 0;
    return;
  }

  switch (key) {
    case "ArrowLeft":
      keys.leftKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x -= xVelocity;
      break;
    case "ArrowUp":
    case " ":
    case "Spacebar":
      player.velocity.y = -8;
      break;
    case "ArrowRight":
      keys.rightKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = 0;
      }
      player.velocity.x += xVelocity;
      break;
  }
}

const startGame = () => {
  canvas.style.display = "block";
  startScreen.style.display = "none";
  animate();
}

startBtn.addEventListener("click", startGame);

window.addEventListener("keydown", ({ key }) => {
  movePlayer(key, 8, true);
})

window.addEventListener("keyup", ({ key }) => {
  movePlayer(key, 0, false);
})