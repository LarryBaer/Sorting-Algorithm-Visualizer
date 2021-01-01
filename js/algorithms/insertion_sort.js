var insertionSortButton = document.getElementById("insertion_button");

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        for(let j = i; j > 0; j--){
            if(arr[j - 1] > arr[j]){
                swap(arr, j - 1, j);
            }else{
                break;
            }
        }
    }

    return arr;
}

// insertionSort(linesArr);
// console.log(linesArr);

// //When button is pressed, start quick sort animation
// quickSortButton.addEventListener("click", function() {
//     var sort = quickSort(linesArr, 0, linesArr.length - 1);
//     comparisonCount = 0;
//     function anim() {
//         requestAnimationFrame(anim);
//         drawLines(linesArr);
//     }
//     // setInterval(function() {
//     //    sort.next();
//     // }, sortSpeed);
//     anim();
// console.log(linesArr);
// quickSort(linesArr, 0, linesArr.length - 1);
// console.log(linesArr);
// });