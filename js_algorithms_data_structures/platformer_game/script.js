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
}