//1
function sayHi()
{
	alert('Привет');
}

//2
function returnNumber(num)
{
	return num;
}

//3
function multiply(a, b)
{
	if (isNaN(b))
	{
		b = 1;
	}
	alert(a * b);
}

//4
function pow (a, b)
{
	let degree = a;
	for (let i = 0; i < b-1; ++i)
	{
		a *= degree;
	}
	alert(a);
}

// 3,4,5
function config(set)
{
	if(!set)
	{
		set = prompt('Enter action (+, -, *, /, pow)');
	}
	let a = +prompt('Number a');
	let b = +prompt('Number b');
	calc(set, a, b);
}

function calc(action, a, b)
{
	switch (action)
	{
		case '+':
				sum(a, b);
			break;
		case '-':
				subtract(a, b);
			break;
		case '*':
				multiply(a, b);
			break;
		case '/':
				division(a, b);
			break;
		case 'pow':
				pow(a, b);
			break;
		default:
			alert('Invalid input');
			break;
	}
}

function sum(a, b)
{
	if (isNaN(b))
	{
		b = 0;
	}
	alert(a + b);
}

function subtract(a, b)
{
	if (isNaN(b))
	{
		b = 0;
	}
	alert(a - b);
}

function division(a, b)
{
	if (isNaN(b))
	{
		b = 1;
	}
	alert(a / b);
}

// 6
function isPrime(num)
{
	let flag = true;

	if (num % 2 == 0 && num != 2) return false;

	let len = Math.ceil(Math.sqrt(num));
	for (let i = 3; i <= len; i+= 2)
	{
		if(num % i == 0)
		{
			flag = false;
			break;
		}
	}
	return flag;
}

let clear;

function showPrimes()
{

	if(clear == 1)
	{
		let span = document.querySelectorAll('span'); // обращаю внимание на точку

		span.forEach(function(elem){
		  elem.parentNode.removeChild(elem);
		});
		clear = 0;
	}

	let limit = +prompt("Enter limit");
	for (let i = 2; i < limit; i++)
	{
			if(isPrime(i))
			{
				let newSimple = document.createElement('span');
				newSimple.innerHTML =` ${i} `;
				div.append(newSimple);
			}
	}
	clear = 1;
}