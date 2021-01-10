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

//Changes the animation speed when slider is moved
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

//Creates new lines with button click
generateLinesBtn.addEventListener("click", function() {
  createLines();
  colors = ["#45b6fe"];
  drawLines(linesArr, colors);
});

//Swaps 2 values in an array
function swap(arr, leftIndex, rightIndex){
  var temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

//Slows down animations
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function drawLines(arr, colors) {

  ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

  //Get the spacing and width of lines
  var spacing = mainCanvas.width / (2 * arr.length + arr.length + 1);
  var lineWidth = spacing * 2;

  //Draws lines
  var lineDistance = 10;
  for (var i = 0; i < arr.length; i++) {
    ctx.fillStyle = colors[i];
    ctx.fillRect(lineDistance, arr[i], lineWidth, mainCanvas.height);
    lineDistance += spacing + lineWidth;
  }
}

colors = ["#45b6fe"];
createLines();
drawLines(linesArr, colors);