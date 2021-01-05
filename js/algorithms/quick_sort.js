//https://en.wikipedia.org/wiki/Quicksort

var quickSortButton = document.getElementById("quick_button");

//Main quicksort function
async function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  let index = await partition(arr, start, end);

  await Promise.all([
    quickSort(arr, start, index - 1), 
    quickSort(arr, index, end)]
  );
}

//Splits array using Hoare's partition scheme
async function partition(arr, start, end) {

  let pivot = arr[Math.floor((start + end) / 2)];

  while (start <= end) {
    while (arr[start] < pivot) {
      start++
    }

    while (arr[end] > pivot) {
      end--
    }

    if (start <= end) {
      await quickSortSwap(arr, start, end);
      start++
      end--
    }
  }

  return start;
}

async function quickSortSwap(arr, a, b) {
  await sleep(120);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

//When button is pressed, start quick sort animation
quickSortButton.addEventListener("click", function() {
        var sort = quickSort(linesArr, 0, linesArr.length - 1);
        comparisonCount = 0;
        function anim() {
            requestAnimationFrame(anim);
            drawLines(linesArr);
        }
        anim();
});