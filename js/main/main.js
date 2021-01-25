var mainCanvas = document.getElementById("main_canvas");
var generateLinesBtn = document.getElementById("generate_lines");
var ctx = mainCanvas.getContext("2d");
var linesArr = [];
var comparisonCount = 0;
var sortSpeed = 250;
var lineAmount = 50;

const RED_COLOR = "#FF0000";
const BLUE_COLOR = "#45b6fe";
const GREEN_COLOR = "#00ff00";
const GOLD_COLOR = "#FFD700";
const PINK_COLOR = "#FF69B4";

// Gets random integer to create line heights
function randIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Creates array of different line heights
function createLines() {
  var tempArr = [];
  for (let i = 0; i < lineAmount; i++) {
    tempArr.push(randIntFromInterval(315.00, 0.00));
  }
  linesArr = tempArr.slice(0);
}

createLines();
var test = false;
// Draws single line 
function drawLine(x, y, width, height, color = BLUE_COLOR) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;

  this.draw = () => {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  this.resetColor = () => this.setColor(BLUE_COLOR);

  this.setColor = (color) => {
    if(color !== BLUE_COLOR){
      this.color = color;
    }
    else if(!this.isSorted()){
      this.color = color;
    }
  };

  this.isSorted = () => this.color === GOLD_COLOR;

  this.sorted = () => (this.color = GOLD_COLOR);

  this.setValue = (height, color) => {
    if (!this.isSorted()) {
      this.height = height;
      this.setColor(color);
    }
  };
  this.getValue = (height) => this.height;
}

// Get the spacing and width of lines
const randomArray = linesArr;
var spacing = mainCanvas.width / (2 * randomArray.length + randomArray.length + 1);
var lineWidth = spacing * 2;
var lineDistance = 4;

// Creates array of every individual line
const lines = randomArray.map((v) => {
   var tempLineDistance = lineDistance;
   lineDistance += 20;
  return new drawLine(tempLineDistance, mainCanvas.height, lineWidth, v - mainCanvas.height);
});

// Draws all lines in array
function drawAll(){
  lines.forEach((line) => line.draw());
}

drawAll()

// Actions that determin what to set values
const ACTIONS = {
  SORT: "SORT",
  COMPARE: "COMPARE",
  SWAP: "SWAP",
  PIVOT: "PIVOT",
};

const actionsMap = {
  [ACTIONS.SORT]: (action, lines) => lines[action.data].sorted(),

  [ACTIONS.SWAP]: (action, lines) => {
    const [i, j] = action.data;
    let temp = lines[i].getValue();
    lines[i].setValue(lines[j].getValue(), RED_COLOR);
    lines[j].setValue(temp, RED_COLOR);
  },

  [ACTIONS.COMPARE]: (action, lines) => {
    const [i, j] = action.data;
    lines[i].setColor(GREEN_COLOR);
    lines[j].setColor(GREEN_COLOR);
  },

  [ACTIONS.PIVOT]: (action, lines) => {
    const pivot = action.data;
    lines[pivot].setColor(PINK_COLOR);
  },
};

// Changes the animation speed when slider is moved
function changeSortSpeed(){
  sortSpeed = document.getElementById("change_sort_speed").value;
}

// Creates new lines with button click
generateLinesBtn.addEventListener("click", function() {
  createLines();
  colors = ["#45b6fe"];
  drawLines(linesArr, colors);
});

// Swaps 2 values in an array
function swap(arr, a, b){
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
