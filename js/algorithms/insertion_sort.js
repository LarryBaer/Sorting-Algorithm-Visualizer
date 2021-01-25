var insertionSortButton = document.getElementById("insertion_button");

function insertionSort(arr, onAction){
var a = 1;
    for(let i = 1; i < arr.length; i++){
        for(let j = i; j > 0; j--){
            a = j;
            onAction({ type: ACTIONS.COMPARE, data: [j, j - 1] });
            if(arr[j - 1] < arr[j]){  
                swap(arr, j, j - 1);
                onAction({ type: ACTIONS.SWAP, data: [j, j - 1] });
                onAction({ type: ACTIONS.SORT, data: j});
                
            }else{
                onAction({ type: ACTIONS.SORT, data: j});
                break;
            }
        }
        onAction({ type: ACTIONS.SORT, data: a - 1});
    }
    return arr;
}

// When button is pressed, start quick sort animation
insertionSortButton.addEventListener("click", function() {
    var ticks = 0;
    insertionSort(randomArray, action => {
      ticks++;
      setTimeout(() => {
        actionsMap[action.type](action, lines);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        drawAll(lines);
      }, ticks * sortSpeed);
    });
}); 