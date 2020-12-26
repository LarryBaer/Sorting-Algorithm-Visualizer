var mainCanvas = document.getElementById("main_canvas");
var bubbleButton = document.getElementById("bubble_button");
var generateLinesBtn = document.getElementById("generate_lines");
var ctx = mainCanvas.getContext("2d");
var linesArr = [];
var swapped;
let swappedIndex1 = undefined;
let swappedIndex2 = undefined;
var lineDistance;


//Gets random integer to create line heights
function randIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Creates array of different line heights
function createLines() {
  var tempArr = [];
  for (let i = 0; i < 50; i++) {
    tempArr.push(randIntFromInterval(10.0, 400.0));
  }
  linesArr = tempArr.slice(0);
}

// Draws lines on canvas
function drawLines(arr) {
  ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

  var lineDistance = 10;
  for (let i = 0; i < arr.length; i++) {
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(lineDistance, 0);
    ctx.lineTo(lineDistance, arr[i]);
    if (i === swappedIndex1 || i === swappedIndex2) {
      ctx.strokeStyle = color;
    } else {
      ctx.strokeStyle = "#45b6fe";
    }
    ctx.stroke();
    lineDistance += 20;
  }
}

//Creates new lines with button click
generateLinesBtn.addEventListener("click", function() {
  createLines();
  drawLines(linesArr);
});

createLines();
drawLines(linesArr);

//Sort manually
// var a;
// var b;
// linesArr = linesArr.sort((a, b) => a - b);