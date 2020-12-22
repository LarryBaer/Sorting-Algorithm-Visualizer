var mainCanvas = document.getElementById("main_canvas");
var bubbleButton = document.getElementById("bubble_button");
var generateLinesBtn = document.getElementById("generate_lines");
var ctx = mainCanvas.getContext("2d");
var linesArr = [];
var swapped;

//Gets random integer to create line heights
function randIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Creates array of different line heights
function createLines(){
    var tempArr = [];
    for(let i = 0; i < 50; i++){
        tempArr.push(randIntFromInterval(10.0, 400.0));
    }
    linesArr = tempArr.slice(0);
};

// Draws lines on canvas
function drawLines(arr){
    ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
    var lineDistance = 10;
    for(let i = 0; i < arr.length; i++){
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.moveTo(lineDistance,5);
		ctx.lineTo(lineDistance, arr[i]);
		ctx.strokeStyle = '#0000ff';
        ctx.stroke();
        lineDistance += 20;
    }
};


//--------------------Sort--------------------
//Bubble Sort
  
function* bubbleSort(arr){
do{
	swapped = false;
    for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
				swapped = true;
				yield swapped;
			}   
	}
	}while(swapped);
 }

bubbleButton.addEventListener("click", function(){
	var sort = bubbleSort(linesArr);

	function anim(){
	  requestAnimationFrame(anim);
	  drawLines(linesArr);
	}
	setInterval(function(){	sort.next(); }, 60);
	anim();

});

generateLinesBtn.addEventListener("click", function(){  
    createLines();
     drawLines(linesArr);
});
createLines();
 drawLines(linesArr);


//Sort manually
// var a;
// var b;
// linesArr = linesArr.sort((a, b) => a - b);

