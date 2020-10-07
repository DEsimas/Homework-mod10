let value = prompt("Введите значение");
if(isNaN(+value))
    console.log("Упс, кажется, вы ошиблись");
else
    console.log(value % 2 == 0 ? "Чётное" : "Нечётное");