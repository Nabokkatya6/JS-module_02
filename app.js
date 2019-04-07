'use strict';

let input;
const numbers = [];
let total = 0;

do {
input = prompt('Введите число');

if (Number.isNaN(Number(input)) !== false) {
alert('Попробуйте еще раз');
} 

else if (input !== null) {
numbers.push(Number(input));
}

} while (input !== null);
console.log(numbers);

for (let i = 0; i < numbers.length; i += 1) {
  total = total + numbers[i];
}
console.log(`Общая сумма чисел равна ${total}`);


//------------------------------------------------------------------


const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let userInput;
let remainder;
let correctPassword;

do {
userInput = prompt('Введите пароль');
correctPassword = passwords.includes(userInput);

if (correctPassword) {
  alert('Добро пожаловать!');
  break;
}

else if (remainder = attemptsLeft - 1) {
  alert(`Неверный пароль, у вас осталось ${remainder} попыток`);
}

else { remainder === attemptsLeft;
  alert('У вас закончились попытки, аккаунт заблокирован!');
  break;
}

} while (attemptsLeft > 0);








  