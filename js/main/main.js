var mainCanvas = document.getElementById("main_canvas");
var generateLinesBtn = document.getElementById("generate_lines");
var canvasHeight = document.getElementById("main_canvas").offsetHeight;
var navbarHeight = document.getElementById("main_nav").offsetHeight;
var ctx = mainCanvas.getContext("2d");
var linesArr = [];
var swapped;
let swappedIndex1 = undefined;
let swappedIndex2 = undefined;
var lineDistance;
var comparisonCount = 0;
var maxLineHeight = canvasHeight - navbarHeight;
var sortSpeed = 250;
var amountOfLines = 50;

function changeSortSpeed(){
  sortSpeed = document.getElementById("change_sort_speed").value;
}

function changeLineAmount(){
  amountOfLines = document.getElementById("change_line_amount");
}

//Gets random integer to create line heights
function randIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Creates array of different line heights
function createLines() {
  var tempArr = [];
  for (let i = 0; i < amountOfLines; i++) {
    tempArr.push(randIntFromInterval(300.00, 10.00));
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
    ctx.moveTo(lineDistance, arr[i]);
    ctx.lineTo(lineDistance,  mainCanvas.height);
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

function swap(arr, leftIndex, rightIndex){
  var temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

createLines();
drawLines(linesArr);

//Sort manually
// var a;
// var b;
// linesArr = linesArr.sort((a, b) => a - b);
