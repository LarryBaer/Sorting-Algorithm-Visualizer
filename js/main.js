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
    for(let i = 0; i < 100; i++){
        tempArr.push(randIntFromInterval(10.0, 400.0));
    }
    linesArr = tempArr.slice(0);
};

//Draws lines on canvas
function drawLines(arr){
    ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
    var lineDistance = 5;
    for(let i = 0; i < arr.length; i++){
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(lineDistance,5);
        ctx.lineTo(lineDistance, arr[i]);
        ctx.strokeStyle = '#ff0000';
        ctx.stroke();
        lineDistance += 10;
    }
};

//--------------------Sort--------------------
//Bubble Sort
function bubbleSort(arr){
    swapped = false;
    for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i + 1]){
                swapped = true;
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
    }
 }

bubbleButton.addEventListener("click", function(){
    do{
        bubbleSort(linesArr);
    }while(swapped);

    drawLines(linesArr);

});

generateLinesBtn.addEventListener("click", function(){  
    createLines();
    drawLines(linesArr);
});

createLines();
drawLines(linesArr);









// do{
//     swapped = false;
//     for(let i = 0; i < linesArr.length - 1; i++){
//             if(linesArr[i] > linesArr[i + 1]){
//                 swapped = true;
//                 let temp = linesArr[i];
//                 linesArr[i] = linesArr[i + 1];
//                 linesArr[i + 1] = temp;
//             }
//     }
// }while(swapped);
// drawLines(linesArr);

//Sort by cheating
// var a;
// var b;
// linesArr = linesArr.sort((a, b) => a - b);