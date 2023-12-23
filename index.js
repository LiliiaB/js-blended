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

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// console.log(keys);
// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */

// const someObj = {
//   worker1: 360,
//   worker2: 750,
//   worker3: 240,
// };

// function totalSalaries(obj) {
//   let total = 0;
//   // const salaries = Object.values(obj);
//   for (const salary of Object.values(obj)) {
//     total += salary;
//   }
//   return total;
// }

// console.log(totalSalaries(someObj));
//^=============================================================
/**
//  *? Напишіть ф-цію calcTotalPrice(someStones, stonesName),
//  *? яка приймає масив об'єктів та
//  *? рядок під назвою каменю.
//  *? Функція рахує та повертає загальну вартість каменів
//  *? з таким ім'ям, ціною та кількістю з об'єкта
//  */

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];
// function calcTotalPrice(someStones, stoneName) {
//   for (const item of someStones) {
//     if (item.name === stoneName) {
//       return item.price * item.quantity
//     }
//   }
//   return "Камінь не знайдено"
// }
// const result = calcTotalPrice(stones, "Изумруд")
// console.log(result);
//^=============================================================
///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// function fruitsUpd(arr) {
//   const newArr = [];
//   let id = 1;
//   for (const obj of arr) {
//     const newObj = {
//       ...obj,
//       price: obj.price * 0.8,
//       id,
//     };
//     newArr.push(newObj);
//     id += 1;
//   }
//   return newArr;
// }
// console.log(fruitsUpd(fruits));

// console.log(fruits);

// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)

//const arr = ["best", "the", "foo", "is", "js"];
// console.log (...arr);
// const copyArr = [...arr];
// const idx = copyArr.indexOf("foo");
// copyArr.splice(idx, 1);
// console.log(copyArr.reverse().join(" "));
// console.log(copyArr);

/* const string = arr
  .slice(0, arr.indexOf("foo"))
  .concat(arr.slice(arr.indexOf("foo") + 1, arr.length))
  .reverse()
  .join(" "); */

// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

/* const newFruits = (arr) => {
  return arr.map((fruit, index) => {
    return {
      id: index + 1,
      ...fruit,
      price: fruit.price * 0.8,
    };
  });
}; */

const newFruits = (arr) =>
  arr.map((fruit, index) => ({
    id: index + 1,
    ...fruit,
    price: fruit.price * 0.8,
  }));

console.log(newFruits(fruits));
