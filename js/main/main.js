var mainCanvas = document.getElementById("main_canvas");
var generateLinesBtn = document.getElementById("generate_lines");
var ctx = mainCanvas.getContext("2d");

var linesArr = [];
var sortSpeed = 250;
var lineAmount = 50;

const RED_COLOR = "#FF0000";
const DEFAULT_COLOR = "#808080";
const COMPARISON_COLOR = "#00ff00";
const SORTED_COLOR = "#45b6fe";
const PIVOT_COLOR = "#FF69B4";

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

// Draws single line 
function drawLine(x, y, width, height, color = DEFAULT_COLOR) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;

  this.draw = () => {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  this.resetColor = () => this.setColor(DEFAULT_COLOR);

  this.setColor = (color) => {
    if(color !== DEFAULT_COLOR){
      this.color = color;
    }
    else if(!this.isSorted()){
      this.color = color;
    }
  };

  this.isSorted = () => this.color === SORTED_COLOR;

  this.sorted = () => this.color = SORTED_COLOR;

  this.setValue = (height, color) => {
      this.height = height;
      this.setColor(color);
  };

  this.getValue = (height) => this.height;
}

// Get the spacing and width of lines
var randomArray = linesArr;
var spacing = mainCanvas.width / (2 * randomArray.length + randomArray.length + 1);
var lineWidth = spacing * 2;
var lineDistance = 4;

// Creates array of every individual line
var lines = randomArray.map((height) => {
   var tempLineDistance = lineDistance;
   lineDistance += 20;
  return new drawLine(tempLineDistance, mainCanvas.height, lineWidth, height - mainCanvas.height);
});

// Draws all lines in array
function drawAll(){
  lines.forEach((line) => line.draw());
}

drawAll()

// Actions that determine what to set values
const ACTIONS = {
  SORT: "SORT",
  COMPARE: "COMPARE",
  SWAP: "SWAP",
  ONESWAP: "ONESWAP",
};

// Determines what to do based on what action is selected
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
    lines[i].setColor(COMPARISON_COLOR);
    lines[j].setColor(COMPARISON_COLOR);
  },

  [ACTIONS.ONESWAP]:(action, lines) => {
    const [i, j] = action.data;
    lines[i].setValue(lines[j].getValue(), RED_COLOR);
  },
};

// Changes the animation speed when slider is moved
function changeSortSpeed(){
  sortSpeed = Math.abs(document.getElementById("change_sort_speed").value);
}

// Creates and draws new lines on button click
generateLinesBtn.addEventListener("click", function() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  createLines();

  randomArray = linesArr;
  lineDistance = 4;
  randomArray = linesArr;

  lines = randomArray.map((height) => {
    var tempLineDistance = lineDistance;
    lineDistance += 20;
   return new drawLine(tempLineDistance, mainCanvas.height, lineWidth, height - mainCanvas.height);
 });

  drawAll();

});

// Swaps 2 values in an array
function swap(arr, a, b){
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
