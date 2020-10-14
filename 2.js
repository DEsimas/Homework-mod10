let value = prompt("Введите значение");
if(value == "true" || value == "false")
    console.log("boolean");
else if(!isNaN(+value))
    console.log("number");
else
    console.log("string")

// Похоже, что вы неверно поняли задание. В данном случае нужно было определить тип переменной x, которая может принимать любое значение. Т.е. х задается в коде, а не берется из prompt. Prompt работает несколько иначе и возвращает всегда строку (или null, если пользователь нажал Отмена). Верный вариант решения ниже:

let x = 10; // х может быть любой

switch (typeof x) {
  case 'number':
    console.log('x - число');
    break;
  case 'string':
    console.log('x - строка');
    break;
  case 'boolean':
    console.log('x - булево значение');
    break;
  default: 
    console.log('Тип x не определен');
}
