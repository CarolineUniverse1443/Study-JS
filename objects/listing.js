//возвращает сумму зарплат из объекта
function sumSalaries(arr)
{
	let sum = 0;
	for (let value of Object.values(arr))
	{
		sum += value;
	}
	return sum;
}


let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

alert( sumSalaries(salaries) );

//считает количество свойств в объекте
function count(obj)
{
	return Object.keys(obj).length;
}

let user =
{
	name: 'John',
	age: 30
};

//деструктуризация объекта
function desctuct(obj)
{
	let user = {
		name: "John",
		years: 30,
		isAdmin: true
	};

	let {name, years, isAdmin = false} = user;

	alert(isAdmin);
}

alert( count(user) );