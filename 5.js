let arr = [Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100)];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// Решение не соответствует заданию. Нужно было вывести в консоль кол-во элементов массива, а затем в отдельности каждый элемент. В вашем случае в консоль выводится целый массив. Выше внесла соответствующие исправления в код.