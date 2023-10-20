// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const uncleVance = {
  firstName: 'Vance',
  lastName: 'Roley',
  'favorite food': 'pizza',
  bestFriend: {
    firstName: 'Doja',
    lastName: 'Cat',
    'favorite food': 'fish'
  }
}

// 2. console.log best friend's firstName and your favorite food
console.log(uncleVance.bestFriend.firstName);
console.log(uncleVance['favorite food']);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
let row1 = ['-', 'O', '-'];
let row2 = ['-', 'X', 'O'];
let row3 = ['X', '-', 'X'];
let ticTacToeBoard = [row1, row2, row3];

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ticTacToeBoard[0][2] = 'O';

// 5. Log the grid to the console.
ticTacToeBoard.forEach((row) => console.log(`${row[0]} ${row[1]} ${row[2]}`));

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
const emailRE = /^[\w\S]+@[\w\S]+\.[\w\S]+$/;
console.log(emailRE.test('ricksteves@travel2europe.eu'));
console.log(emailRE.test('123abc@456.'));
console.log(emailRE.test('123abc@456. '));
console.log(emailRE.test('123abc$%'));
console.log(emailRE.test(''));
console.log(emailRE.test(' '));

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
const dateArray = assignmentDate.split('/');
const aDate = new Date(dateArray[2], dateArray[0] - 1, dateArray[1]);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
const millisecondsInSevenDays = 1000 * 60 * 60 * 24 * 7;
const assignmentDateMilliseconds = aDate.getTime();
const dueDateMilliseconds = assignmentDateMilliseconds + millisecondsInSevenDays;
const dueDate = new Date(dueDateMilliseconds);
console.log(dueDate.toString());

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];


// 10. log this value using console.log
