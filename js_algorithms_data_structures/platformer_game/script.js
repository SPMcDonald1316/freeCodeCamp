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