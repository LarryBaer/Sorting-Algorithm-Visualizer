// https://en.wikipedia.org/wiki/Quicksort

var quickSortButton = document.getElementById("quick_button");

// Main quicksort function
function quickSort (arr, start, end, onAction){
  if (start >= end) {
    return;
  }

  let index = partition(arr, start, end, onAction);

  quickSort(arr, start, index - 1, onAction); 
  quickSort(arr, index, end, onAction);

  onAction({ type: ACTIONS.SORT, data: index});
  onAction({ type: ACTIONS.SORT, data: 0});
}

// Splits array using Hoare's partition scheme
function partition(arr, start, end, onAction) {
  let num = Math.floor((start + end) / 2);
  let pivot = arr[Math.floor((start + end) / 2)];

  while (start <= end) {
    while (arr[start] > pivot) {
      start++
      onAction({ type: ACTIONS.COMPARE, data: [num, start] });
    }

    while (arr[end] < pivot) {
      end--
      onAction({ type: ACTIONS.COMPARE, data: [num, end] });
    }

    if (start <= end) {
      swap(arr, start, end);
      onAction({ type: ACTIONS.SWAP, data: [start, end] });
      start++
      end--
    }
  }
  return start;
}

// When button is pressed, start quick sort 
quickSortButton.addEventListener("click", function() {
  var ticks = 0;
  quickSort(randomArray, 0, linesArr.length - 1, action => {
    ticks++;
    setTimeout(() => {
      actionsMap[action.type](action, lines);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      drawAll(lines);
      lines.forEach((m) => m.resetColor());
    }, ticks * sortSpeed);
  });
});