//https://en.wikipedia.org/wiki/Quicksort

var quickSortButton = document.getElementById("quick_button");

//Main quicksort function
function quickSort(arr, start, end) {
    if (start < end) {
      var index = partition(arr, start, end);
      quickSort(arr, start, index);
      quickSort(arr, index + 1, end);
    }else{
        return;
    }
  }
  
  //Splits array using the hoare partition scheme
  function partition(arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)];
    var i = left - 1;
    var j = right + 1;

    while (true) {
      do{
        i++;
      }while(arr[i] < pivot);
  
      do{
        j--;
      }while(arr[j] > pivot);
  
      if (i >= j) {
        return j;
      }
      swap(arr, i, j);
    }

  }

// //When button is pressed, start quick sort animation
quickSortButton.addEventListener("click", function() {
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
    console.log(linesArr);
    quickSort(linesArr, 0, linesArr.length - 1);
    console.log(linesArr);
});