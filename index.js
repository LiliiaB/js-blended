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

// const login = prompt("Введіть логін.").trim();
// console.log(login);
// if (login === "Адмін") {
//   const password = prompt("Введіть пароль.");
//   if (password === "Я головний") {
//     console.log("Здрастуйте!");
//   } else {
//     console.log("Невірний пароль!");
//   }
// } else if (!login) {
//   // } else if (login === "" || login === null) {
//   console.log("Скасовано");
// } else {
//   console.log("Я вас не знаю");
// }

/**
 *? Напишіть цикл, який виводить у консоль
 *? всі парні числа  від max до min  за спаданням
 */

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--) {
//   // if (i % 2 === 0) {
//   //   console.log(i);
//   // }

//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
 */

// let number = prompt("Введіть число");
// let total = 0;
// while (number !== null) {
//   total += Number(number);
//   number = prompt("Введіть число");
// }
// alert(`Загальна сума введених чисел дорівнює ${total}`);

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

const user = {
  name: "John",
  age: 20,
  hobby: "tennis",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
console.log(keys);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
