init();

function init()
{
	alert('Привет, добро пожаловать в "Игромат" 1.0');
	let game = chooseGame();
}

function chooseGame()
{
	let game = '';

	while (game != '4')
	{
		game = prompt( `
Выбери игру
1 - угадалка;
2 - считалка;
3 - кликалка;
Для выхода введи "выход"
`, '2');

		switch (game)
		{
			case '1':
			case 'угадалка':
			case '2':
			case 'считалка':
			case '3':
			case 'кликалка':
				startGame(game);
				break;
			case '4':
				alert('Пока, пока :3');
				break;
			default:
				alert('Неправильный ввод :с');
				break;
		}
	}
}

function startGame(game)
{
	alert('Запускается игра...');
	if(game == '1' || game == 'угадалка')
		guessGame();
	if(game == '2' || game == 'считалка')
		solveGame();
	if(game == '3' || game == 'кликалка')
		clickGame();
}

function random(range)
{
	return Math.floor(Math.random() * range);
}


function guessGame()
{
	alert('Игра "угадалка"');
	alert(`
    Я случайным образом загадаю число от 1 до 100.
    Твоя задача его угадать за наименьшее число попыток.
    После каждого твоего ввода я буду говорить больше твое число или меньше заданного.
    Начнем?
`);
	let randomNumber = random(100);
	alert(randomNumber);
	let guessNumber = '';
	let counter = 0;

	while(guessNumber != randomNumber)
	{
		guessNumber = prompt('Попробуй угадать :з');
		if(isNaN(guessNumber))
		{
			alert('Неправильный ввод :с');
		}
		else
		{
			if (guessNumber > randomNumber)
			{
				alert('Слишком много');
			}
			else if (guessNumber < randomNumber)
			{
				alert('Слишком мало');
			}
			else
			{
				alert('Угадал!');
			}
			counter++;
		}
	}

	alert(`Тебе удалось угадать за ${counter} попыток`);
};

function solveGame()
{
	let num1 = 0;
	let num2 = 0;
	let count = 0;
	let guess = '';
	alert('Игра "считалка"');
	alert(`
    Я случайным образом буду давать задание по арифметике.
    Твоя задача правильно решить 5 примеров.
    Начнем?
`);
	for (let i = 0; i < 5; i++)
	{
		num1 = random(20);
		num2 = random(20);

		guess = prompt(`${num1} + ${num2}`);

		if(+guess == num1+num2)
		{
			count++;
		}
	}

	alert(`Правильных ответов: ${count} из 5`);
}

function clickGame()
{
	alert('Игра "кликалка"');
	alert(`
    Я случайным образом буду показывать 10 системных окон.
    Твоя задача как можно скорее прокликать их все.
    В окне confirm нужно нажимать "Отмена".
    Начнем?
`);
}