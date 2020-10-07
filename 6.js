let arr = [4,4,4,6];
let message = "Значения в массиве одинаковы"
arr.forEach(function(item, index, array){
    if(array[0] != item) message = "Значения в массиве различаются";
})
console.log(message);