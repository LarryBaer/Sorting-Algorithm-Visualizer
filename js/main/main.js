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

// Creates array of different line heights
function createLines() {
  var tempArr = [];
  for (let i = 0; i < lineAmount; i++) {
    tempArr.push(randIntFromInterval(300.00, 10.00));
  }
  linesArr = tempArr.slice(0);
}

createLines();

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
    if (!this.isSorted()) {
      this.color = color;
    }
  };

  this.isSorted = () => this.color === GOLD_COLOR;

  this.sorted = () => (this.color = GOLD_COLOR);

  this.setValue = (v, color) => {
    if (!this.isSorted()) {
      this.height = v;
      this.setColor(color);
    }
  };
  this.getValue = (v) => this.height;
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
const drawAll = () => lines.forEach((m) => m.draw());
drawAll()

// Actions that determin what to set values
const ACTIONS = {
  SORT: "SORT",
  COMPARE: "COMPARE",
  SWAP: "SWAP",
};

const actionsMap = {
  [ACTIONS.SORT]: (action, members) => members[action.data].sorted(),
  [ACTIONS.SWAP]: (action, members) => {
    const [i, j] = action.data;
    let tmp = members[i].getValue();
    members[i].setValue(members[j].getValue(), RED_COLOR);
    members[j].setValue(tmp, RED_COLOR);
  },
  [ACTIONS.COMPARE]: (action, members) => {
    const [i, j] = action.data;
    members[i].setColor(GREEN_COLOR);
    members[j].setColor(GREEN_COLOR);
  },
};

// Changes the animation speed when slider is moved
function changeSortSpeed(){
  sortSpeed = document.getElementById("change_sort_speed").value;
}

// Gets random integer to create line heights
function randIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



// Creates new lines with button click
generateLinesBtn.addEventListener("click", function() {
  createLines();
  colors = ["#45b6fe"];
  drawLines(linesArr, colors);
});

// Swaps 2 values in an array
function swap(arr, leftIndex, rightIndex){
  var temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}
