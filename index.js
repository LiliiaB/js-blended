/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

// const userAnswer = prompt("Яка офіційна назва JavaScript?")
//   .trim()
//   .toLowerCase();
// console.log(userAnswer);

// if (userAnswer === "ecmascript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

/**
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 */

// const number = prompt("Введіть кількість хвилин.");
// const hours = String(Math.floor(number / 60)).padStart(2, "0");
// const minutes = String(number % 60).padStart(2, "0");
// console.log(`${hours}:${minutes}`);

/**
*? Напишіть код, який запитуватиме
*? логін за допомогою prompt та логувати результат
*? у консоль браузера
    
*? Якщо відвідувач вводить "Адмін",
*? то prompt запитує пароль.
*? Якщо нічого не ввели або натиснуто клавішу Esc
*? вивести рядок "Скасовано"
*? В іншому випадку вивести рядок "Я вас не знаю"
    
*? Пароль перевіряти так:
*? Якщо введено пароль "Я головний",
*? то вивести рядок "Здрастуйте!"
*? інакше виводити рядок "Невірний пароль!"
 */

const login = prompt("Введіть логін.").trim();
console.log(login);
if (login === "Адмін") {
  const password = prompt("Введіть пароль.");
  if (password === "Я головний") {
    console.log("Здрастуйте!");
  } else {
    console.log("Невірний пароль!");
  }
} else if (!login) {
  // } else if (login === "" || login === null) {
  console.log("Скасовано");
} else {
  console.log("Я вас не знаю");
}
