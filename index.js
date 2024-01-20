//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
const alertInputEl = document.querySelector("#alertInput");
const alertButtonEl = document.querySelector("#alertButton");

alertButtonEl.addEventListener("click", () => {
  alert(alertInputEl.value);
});

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
const leftSwapInputEl = document.querySelector(`#leftSwapInput`);
const rightSwapInputEl = document.querySelector(`#rightSwapInput`);
const swapButtonEl = document.querySelector(`#swapButton`);

swapButtonEl.addEventListener("click", () => {
  const valueLeftInput = leftSwapInputEl.value;
  const valueRightInput = rightSwapInputEl.value;

  leftSwapInputEl.value = valueRightInput;
  rightSwapInputEl.value = valueLeftInput;
});

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
const passwordInputEl = document.querySelector("#passwordInput");
const passwordButtonEl = document.querySelector("#passwordButton");
passwordButtonEl.addEventListener("click", () => {
  if (passwordInputEl.getAttribute("type") === "password") {
    passwordInputEl.setAttribute("type", "text");
    passwordButtonEl.textContent = "Приховати";
  } else {
    passwordInputEl.setAttribute("type", "password");
    passwordButtonEl.textContent = "Розкрити";
  }
});

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

const boxEl = document.querySelector("#box");
const decreaseBtnEl = document.querySelector("#decrease");
const increaseBtnEl = document.querySelector("#increase");

decreaseBtnEl.addEventListener("click", () => {
  const size = parseInt(getComputedStyle(boxEl).width);
  boxEl.style.width = size - 10 + "px";
  boxEl.style.height = size - 10 + "px";
});

increaseBtnEl.addEventListener("click", () => {
  const size = parseInt(getComputedStyle(boxEl).width);
  boxEl.style.width = size + 10 + "px";
  boxEl.style.height = size + 10 + "px";
});

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

addEventListener("click", (event) => {
    if (event.target.id === "place") {
      console.log(true);
    }
});





//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
