// 2
let num = 1.4999;
let round = Math.round(num);
let ceil = Math.ceil(num);
let floor = Math.floor(num);
console.log(num);
console.log(round);
console.log(ceil);
console.log(floor);
// 3
let sum = 0;
let arr = [];
for (let i = 0; i < 10; ++i) {
    let random = Math.round(Math.random()*10);
    arr.push(random);
    sum += random;
}

console.log(arr);
console.log(sum);

// 4
arr = [];
for (let i = 0; i < 10; ++i) {
    let random = Math.round(Math.random()*10);
    arr.push(random);
}

let min = Math.min(...arr);
console.log(arr);
console.log(min);


// 5
arr = [];
for (let i = 0; i < 10; ++i) {
    let random = Math.round(Math.random()*10);
    arr.push(random);
}

let max = Math.max(...arr);
console.log(arr);
console.log(max);

// 6
console.log('enormous number: '+Math.pow(999999, 999999)); //infinity

// 7
let n = Math.round(Math.random()*40);
console.log(n);
// 8
let n2 = 60 + Math.round(Math.random()*40);
console.log(n2);

// 9
function random(a, b)
{
	let rangeNum = a + Math.round(Math.random()*(b-a));
	console.log(`from: ${a} to: ${b}`);
	return rangeNum;
}

console.log(random(50, 120));
