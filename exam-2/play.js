alert('Привет, добро пожаловать в "Игромат" 1.0');
let game = '';

while (game != '4')
{
	game = prompt( `
Выбери игру
1 - угадалка;
2 - считалка;
3 - кликалка;
Для выхода введи "выход"
`, '1');

	switch (game)
	{
		case '1':
		case 'угадалка':
			alert('Запускается игра...');
			guessGame();
			break;
		case '2':
		case 'считалка':
			alert('Запускается игра...');
			break;
		case '3':
		case 'кликалка':
			alert('Запускается игра...');
			break;
		case '4':
			alert('Пока, пока :3');
			break;
		default:
			alert('Неправильный ввод :с');
			break;
	}
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
	let randomNumber = Math.floor(Math.random() * 100);
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