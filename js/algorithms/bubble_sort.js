var bubbleButton = document.getElementById("bubble_button");

// Bubble sort algorithm
const bubbleSort = (arr, onAction) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      onAction({ type: ACTIONS.COMPARE, data: [j, j + 1] });
      if (arr[j] < arr[j + 1]) {
        swap(arr, j + 1, j);
        onAction({ type: ACTIONS.SWAP, data: [j, j + 1] });
      }
    }
    onAction({ type: ACTIONS.SORT, data: arr.length - i - 1});
  }
  return arr;
};

// When button is pressed, start bubble sort 
bubbleButton.addEventListener("click", function() {
  var ticks = 0;
  bubbleSort(randomArray, action => {
    ticks++;
    setTimeout(() => {
      actionsMap[action.type](action, lines);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      drawAll(lines);
      lines.forEach((height) => height.resetColor());
    }, ticks * sortSpeed);
  });
});


