var mainCanvas = document.getElementById("main_canvas");
var generateLinesBtn = document.getElementById("generate_lines");
var ctx = mainCanvas.getContext("2d");
var linesArr = [];
let swappedIndex1 = undefined;
let swappedIndex2 = undefined;
let swappedIndex3 = undefined;
var lineDistance;
var comparisonCount = 0;
var sortSpeed = 250;
var amountOfLines = 50;
var linesThatAreGood = 0;

function changeSortSpeed(){
  sortSpeed = document.getElementById("change_sort_speed").value;
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
    }else if(linesThatAreGood){
      ctx.strokeStyle = "#00ff00";
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

//Swaps 2 values in an array
function swap(arr, leftIndex, rightIndex){
  var temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

createLines();
drawLines(linesArr);

//Sort manually
// var a;
// var b;
// linesArr = linesArr.sort((a, b) => a - b);