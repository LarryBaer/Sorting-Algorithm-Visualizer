var insertionSortButton = document.getElementById("insertion_button");

function* insertionSort(arr){

    for(let i = 1; i < arr.length; i++){
        color = "#00ff00";
        swappedIndex1 = i;
        yield;
        
        for(let j = i; j > 0; j--){
      
            color = "#FF0000";
            swappedIndex2 = j;
            yield;
            
            if(arr[j - 1] < arr[j]){  
                swap(arr, j, j - 1);
                
            }else{
                yield;
                break;
            }
        }
    }
    return arr;
}

//When button is pressed, start quick sort animation
insertionSortButton.addEventListener("click", function() {
    var sort = insertionSort(linesArr);
    comparisonCount = 0;
    function anim() {
        requestAnimationFrame(anim);
        drawLines(linesArr);
    }
     setInterval(function() {
        sort.next();
     }, sortSpeed);
    anim();
});