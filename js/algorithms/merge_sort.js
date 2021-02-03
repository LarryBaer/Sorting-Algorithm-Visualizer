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
      if (temp[i] <= arr[j]) {

        arr[x] = temp[i];

          for(var test1 = 0; test1 < temp.length; test1++) {
            var num = -1;
            var target = temp[i];
              for(var test2 = 0; test2 < arr.length; test2++){
                if(arr[test2] == target){
                  target = test2;
                }
              }
            }

            console.log("ONE: ", temp[i]);
            console.log("TWO:", arr[target]);

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
        lines.forEach((m) => m.resetColor());
      }, ticks * sortSpeed);
    });

  // mergeSort(linesArr, 0, linesArr.length);
  console.log(linesArr);
  });
