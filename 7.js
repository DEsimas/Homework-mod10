let arr = [4,6,4,5,5,"gfdh","dftg","f",1,true,0,"dfs",5,0];
let boolCounter = 0, strCounter = 0, oddCounter = 0, evenCounter = 0, zeroCounter = 0;
arr.forEach(function(item, index, array){
    if(typeof item === "boolean")
        boolCounter++;
    else if(item === 0)
        zeroCounter++;
    else if(typeof item === "number" && !isNaN(item)) 
        item % 2 == 0 ? evenCounter++ : oddCounter++;
    else if (typeof item === "string")
        strCounter++;
});
console.log(`Логические значения: ${boolCounter}\nСтроки: ${strCounter}\nЧётные числа: ${evenCounter}\nНечётные числа: ${oddCounter}\nНули ${zeroCounter}`);

// Есть несколько ошибок в работе кода: строки с цифрами (например, "55") распознаются как числа. Здесь было бы полезно использовать typeof, чтобы отделить строки от чисел. Только проверки на isNaN в данном случае недостаточно. В проверке на булевы значения также оптимальнее использовать typeof, т.к. можно обойтись одним условием вместо двух.
// Также не учтены значения null, undefined и проч. Сейчас все неучтенные в первых трех условиях значения причисляются к строкам, что неверно. Для строк надо также создать условие, чтобы учитывались только строки. Остальные значения будут просто игнорироваться.
// Выше в коде исправила ошибки, также чуть оптимизировала условный оператор