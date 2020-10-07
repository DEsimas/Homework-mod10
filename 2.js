let value = prompt("Введите значение");
if(value == "true" || value == "false")
    console.log("boolean");
else if(!isNaN(+value))
    console.log("number");
else
    console.log("string")