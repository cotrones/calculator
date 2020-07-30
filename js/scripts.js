console.log('Hello');

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const operator = (opp, x, y) => {
	switch (opp) {
		case 'add':
			return add(x, y);
		case 'sub':
			return sub(x, y);
		case 'multiply':
			return multiply(x, y);
		case 'divide':
			return divide(x, y);
	}
}