var mergeSortButton = document.getElementById("merge_button");

function mergeSort(arr, start, end, onAction) {
  if (end - start > 1) {
      var mid = start + ((end - start) >> 1);
      
      mergeSort(arr, start, mid, onAction);
      mergeSort(arr, mid, end, onAction);
      merge(arr, start, mid, end, onAction);
  }
}

function merge(arr, start, mid, end, onAction) {
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
      if (temp[i] >= arr[j]) {

        arr[x] = temp[i];

          for(var n = 0; n < temp.length; n++) {
            var target = temp[i];
              for(var m = 0; m < arr.length; m++){
                if(arr[m] == target){
                  target = m;
                }
              }
            }

          onAction({ type: ACTIONS.ONESWAP, data: [x, target]});
          x++;
          i++;
      } else {
          arr[x] = arr[j];
          onAction({ type: ACTIONS.ONESWAP, data: [x, j]});
          j++;
          x++;
      }
  }

  while (i < length) {      
    arr[x] = temp[i];
    i++;
    x++;
  }
}

// When button is pressed, start merge sort 
mergeSortButton.addEventListener("click", function() {
    var ticks = 0;
    mergeSort(randomArray, 0, randomArray.length, action => {
      ticks++;
      setTimeout(() => {
        actionsMap[action.type](action, lines);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        drawAll(lines);
        lines.forEach((height) => height.resetColor());
      }, ticks * sortSpeed);
    });

  console.log(linesArr);
  
  });
