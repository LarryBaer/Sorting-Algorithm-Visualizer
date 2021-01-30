var mergeSortButton = document.getElementById("merge_button");

function mergeSort(arr, start, end) {
  if (end - start > 1) {
      var mid = start + ((end - start) >> 1);
      
      mergeSort(arr, start, mid);
      mergeSort(arr, mid, end);
      merge(arr, start, mid, end);
  }
}

function merge(arr, start, mid, end) {
  var temp = [];
  var length = mid - start;

  var i;
  var j;
  var x; 

  for (i = 0; i < length; i++) {
      temp[i] = arr[start + i];
  }

  i = 0;
  j = mid;
  x = start;
  
  while (i < length && j < end) {
      if (temp[i] <= arr[j]) {
          arr[x++] = temp[i++];
      } else {
          arr[x++] = arr[j++];
      }
  }

  while (i < length) {
      arr[x++] = temp[i++];
  }
}

// When button is pressed, start merge sort 
mergeSortButton.addEventListener("click", function() {
  
    // var ticks = 0;
    // mergeSort(randomArray, action => {
    //   ticks++;
    //   setTimeout(() => {
    //     actionsMap[action.type](action, lines);
    //     ctx.clearRect(0, 0, innerWidth, innerHeight);
    //     drawAll(lines);
    //     lines.forEach((m) => m.resetColor());
    //   }, ticks * sortSpeed);
    // });

  mergeSort(linesArr, 0, linesArr.length);
  console.log(linesArr);
  });
