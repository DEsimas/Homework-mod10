let value = Math.round(Math.random()*100);
console.log(value);

// Почти верно, но есть ошибка: ваш код возвращает числа от 0 до 99, число 100 не попадает в возвращаемый диапазон (а по заданию должно). Вот верный вариант решения:

const random = Math.floor(Math.random() * 101);