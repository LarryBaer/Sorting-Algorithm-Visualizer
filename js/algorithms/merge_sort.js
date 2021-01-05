var mergeSortButton = document.getElementById("merge_button");

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var mid = Math.round((arr.length / 2));
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  sorted = [];
  
  while (left && left.length > 0 && right && right.length > 0) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    }
    else {
      sorted.push(right.shift());
    }
  }
  return sorted.concat(left, right);
}

// console.log(mergeSort(linesArr));

mergeSortButton.addEventListener("click", function() {
    var sort = mergeSort(linesArr);
    comparisonCount = 0;
    function anim() {
      requestAnimationFrame(anim);
      drawLines(linesArr);
    }
    anim();
  });