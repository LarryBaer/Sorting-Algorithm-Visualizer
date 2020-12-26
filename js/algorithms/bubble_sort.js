let color = undefined;

//bubble sort algorithm
function* bubbleSort(arr) {
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      color = "#00ff00";
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        color = "#FF0000";
      }
      swappedIndex1 = i;
      swappedIndex2 = i + 1;
      yield;
    }
  } while (swapped);
}

//Starts bubble sort animation
bubbleButton.addEventListener("click", function() {
  var sort = bubbleSort(linesArr);

  function anim() {
    requestAnimationFrame(anim);
    drawLines(linesArr);
  }
  setInterval(function() {
    sort.next();
  }, 500);
  anim();
});