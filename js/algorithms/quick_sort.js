var quickSortButton = document.getElementById("quick_button");

function quickSort(arr, start, end) {
    if(start >= end){
        return;
    }

    let index = seperate(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}

function seperate(arr, start, end) {
    let pivotIndex = start;
    let pivotValue = arr[end];

    for(let i = start; i < end; i++){
        if(arr[i] < pivotValue){
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }

    swap(arr, pivotIndex, end);
    return pivotIndex;
}

// quickSort(linesArr, 0, linesArr.length - 1);
// console.log(linesArr);

//When button is pressed, start quick sort animation
quickSortButton.addEventListener("click", function() {
        console.log("quick sort button clicked");
        var sort = quickSort(linesArr, 0, linesArr.length - 1);
        comparisonCount = 0;
        function anim() {
            requestAnimationFrame(anim);
            drawLines(linesArr);
        }
        // setInterval(function() {
        //    sort.next();
        // }, sortSpeed);
        anim();
});