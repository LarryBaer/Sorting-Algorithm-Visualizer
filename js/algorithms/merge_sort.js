var mergeSortButton = document.getElementById("merge_button");

function mergeSort(array){

    if(array.length <= 1){
      return array;
    }

    let middle = array.length / 2;
    let left = array.splice(0, middle); 
  
    return merge(mergeSort(left), mergeSort(array));
  }
  
  function merge(left, right){

    const sortedArr = [];
  
    while(left.length && right.length){

      if(left[0] < right[0]){
        sortedArr.push(left.shift());
      }else{
        sortedArr.push(right.shift());
      }
    }
    
    return sortedArr.concat(left, right);

  }

// console.log(mergeSort(linesArr));


// mergeSortButton.addEventListener("click", function() {
//     var sort = mergeSort(linesArr);
//     comparisonCount = 0;
//     drawLines(mergeSort(linesArr));
//     function anim() {
//       requestAnimationFrame(anim);
//       drawLines(linesArr);
//     }
//     // setInterval(function() {
//     //    sort.next();
//     // }, sortSpeed);
//     anim();
//   });