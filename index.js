/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

const userAnswer = prompt("Яка офіційна назва JavaScript?")
  .trim()
  .toLowerCase();
console.log(userAnswer);

if (userAnswer === "ecmascript") {
  alert("Вірно!");
} else {
  alert("Не знаєте? ECMAScript!");
}
