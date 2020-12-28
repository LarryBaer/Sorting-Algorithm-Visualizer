var quickSortButton = document.getElementById("quick_button");

function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = seperate(arr, left, right); 
        if (left < index - 1) { 
            quickSort(arr, left, index - 1);
        }
        if (index < right) { 
            quickSort(arr, index, right);
        }
    }
    return arr;
}

function seperate(arr, left, right) {
    var pivot   = arr[[Math.floor((right + left) / 2)]];
    var i = left; 
    var j = right;

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }

        while (arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(arr, i, j); 
            i++;
            j--;
        }
    }
    return i;
}

var sort2 = quickSort(linesArr, 0, linesArr.length - 1);
console.log(sort2);
//When button is pressed, start quick sort animation
quickSortButton.addEventListener("click", function() {
        console.log("quick sort button clicked");
        var sort = quickSort(linesArr, 0, linesArr.length - 1);
        comparisonCount = 0;
        function anim() {
            requestAnimationFrame(anim);
            drawLines(linesArr);
        }
        setInterval(function() {
           sort.next();
        }, sortSpeed);
        anim();
});