let color = undefined;
var bubbleButton = document.getElementById("bubble_button");
var comparison_count_txt = document.getElementById("comparison_count_text");

//Bubble sort algorithm
function* bubbleSort(arr) {
  var sortLength = arr.length - 1;

  do {
    swapped = false;
    for (let i = 0; i < sortLength; i++) {
      comparisonCount++;
      comparison_count_txt.innerHTML = comparisonCount;
      color = "#00ff00";
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        color = "#FF0000";
      }
      yield;
    }
    sortLength--;
  } while (swapped);
}

//When button is pressed, start bubble sort animation
bubbleButton.addEventListener("click", function() {
  var sort = bubbleSort(linesArr);
  comparisonCount = 0;
  function anim() {
    colors = ["#45b6fe"];
    requestAnimationFrame(anim);
    drawLines(linesArr, colors);
  }
  setInterval(function() {
     sort.next();
  }, sortSpeed);
  anim();
});