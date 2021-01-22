var bubbleButton = document.getElementById("bubble_button");
var comparison_count_txt = document.getElementById("comparison_count_text");

const bubbleSort = (array, onAction) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      onAction({ type: ACTIONS.COMPARE, data: [j, j + 1] });
      if (array[j] < array[j + 1]) {
        swap(array, j + 1, j);
        onAction({ type: ACTIONS.SWAP, data: [j, j + 1] });
      }
    }
    onAction({ type: ACTIONS.SORT, data: array.length - i - 1});
  }
  return array;
};

// When button is pressed, start bubble sort animation
bubbleButton.addEventListener("click", function() {
  var ticks = 0;
  bubbleSort(randomArray, (action) => {
    ticks++;
    setTimeout(() => {
      actionsMap[action.type](action, lines);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      drawAll(lines);
      lines.forEach((m) => m.resetColor());
    }, ticks * sortSpeed);
  });
});


