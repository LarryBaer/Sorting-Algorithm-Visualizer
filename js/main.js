var mainCanvas = document.getElementById("main_canvas");
var ctx = mainCanvas.getContext("2d");
var linesArr = [];
var lineDistance = 5;



(function createLines(){
    for(let i = 0; i < 100; i++){
        linesArr.push(randIntFromInterval(10.0, 400.0));
    }
})();

//Sort by cheating
// var a;
// var b;
// linesArr = linesArr.sort((a, b) => a - b);

function randIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function drawLines(){
    for(let i = 0; i < linesArr.length; i++){
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(lineDistance,5);
        ctx.lineTo(lineDistance, linesArr[i]);
        ctx.strokeStyle = '#ff0000';
        ctx.stroke();
        lineDistance += 10;
    }
}
//Sort
//Bubble Sort
for(let i = 0; i < linesArr.length; i++){
    for(let j = 0; j < linesArr.length-i-1; j++){
        var numA = linesArr[i];
        var numB = linesArr[j + 1];
        if(numA > numB){
            var temp = linesArr[i];
            linesArr[i] = linesArr[j];
            linesArr[j] = temp;
        }
    }
}

console.log(linesArr);
drawLines();
