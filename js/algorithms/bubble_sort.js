var bubbleButton = document.getElementById("bubble_button");
var comparison_count_txt = document.getElementById("comparison_count_text");

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

// When button is pressed, start bubble sort animation
bubbleButton.addEventListener("click", function() {
  test = true;
  var ticks = 0;
  bubbleSort(randomArray, action => {
    ticks++;
    setTimeout(() => {
      actionsMap[action.type](action, lines);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      drawAll(lines);
      lines.forEach((m) => m.resetColor());
    }, ticks * sortSpeed);
  });
});


