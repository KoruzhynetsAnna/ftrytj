
// var age = 13;

// console.log(age);


// var name = "Anya";

// console.log(name);


// var isStudent = true;

// console.log(isStudent);


// var myString = "Life is what happens when you're busy making other plans.";

// console.log(myString);


// var myNumber = 5;

// myNumber += 10;

// console.log(myNumber);

// var myNull = null;

// console.log(myNull);


// var userName = prompt("Введіть ваше ім'я:");

// alert("Привіт, " + userName + "!");


// var confirmation = confirm("Ви погоджуєтесь з цією дією?");

// if (confirmation) {
//   alert("Дякую за підтвердження!");
// } else {
//   alert("Дію відмінено!");
// }


// alert("Ця дія небезпечна!");

// var dangerConfirmation = confirm("Ви погоджуєтесь з цією дією?");

// if (dangerConfirmation) {
//   alert("Дякую за підтвердження!");
// } else {
//   alert("Дію відмінено!");
// }



// 1.

// let tCelsius = 30;

// let tFahrenheit = (tCelsius * 9/5) + 32;

// console.log("Температура у Фаренгейтах:", tFahrenheit);


// 2.

// let daysInOneMonths = 30;

// let hoursInOneMonths = daysInOneMonths * 24;

// let minutesInOneMonths = hoursInOneMonths * 60;

// console.log("К-ть годин у місяці:", hoursInOneMonths);

// console.log("К-ть хвилин в місяці:", minutesInOneMonths);

// 3.

// let levelOfHealth = 100;

// let levelOfEnergy = 100;

// levelOfHealth -= 45;

// levelOfEnergy -= 28;

// console.log("рівень здоров'я:", levelOfHealth);

// console.log("рівень енергії:", levelOfEnergy);

// 4.

// let purchaseAmount = 500;

// let discountPercentage = 10;

// let discountedAmount = purchaseAmount * (1 - discountPercentage/100);

// console.log("сума зі знижкою:", discountedAmount);

// 5.

// let floatNumber = 4.90;

// let roundNumber = Math.floor(floatNumber);

// console.log("округлене число:", roundNumber);

// 6.

// let stringNumber = "8.67";

// let decimalNumber = parseFloat(stringNumber);

// console.log("десяткове число:", decimalNumber);

// 7.

// stringIdk = 15;

// let idkNumber = parseInt(stringIdk);

// console.log("Ціле число:", idkNumber);

// let stringFromIdk = idkNumber.toString();

// console.log("Рядок зі значенням:", stringFromIdk);

// 8.

// let number = 16;

// let squareRoot = Math.sqrt(number);

// console.log("Корінь числа:", squareRoot);

// 9.

// let integerValue = 45; 
// let numberString = "123";

// let parsedInteger = parseInt(numberString);
// console.log("Ціле число після перетворення:", parsedInteger);

// let stringFromInteger = integerValue.toString();
// console.log("Рядок після перетворення:", stringFromInteger);

// 1.

// let result = 5 + 5 + '5';

// console.log(typeof result);

// console.log(typeof result);

// 2.

// let email = 'anetkor8@gmail.com';
// let hasAtSymbol = email.includes('@');
// let totalCharacters = email.length;

// console.log(`Емеіл мітить @ символ: ${hasAtSymbol}`);
// console.log(`Загальна к-ть символів в емейлі: ${totalCharacters}`);

// 3.

// let word1 = 'My';
// let word2 = 'name';
// let word3 = 'is';

// let fullName = `${word1} ${word2} ${word3} Viktor`;
// console.log(fullName);

// 4.

// let userName = 'Олександро';
// let payment = 300;

// alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);


// 1
// function checkFields() {
//     var field1Value = document.getElementId("field1").value;
//     var field2Value = document.getElementId("field2").value;

//     if (field1Value !== "" && field2Value !== "") {
//         alert("Обидва поля заповнені");
//     } else {
//         alert("Не всі поля заповнені");
//     }
// }

// 2

// function checkSum() {
//     var num1 = parseFloat(document.getElementById("num1").value);
//     var num2 = parseFloat(document.getElementById("num2").value);

//     var sum = num1 + num2;

//     if (sum > 10) {
//         alert("Сума більша за 10");
//     } else {
//         alert("Сума менша або дорівнює 10");
//     }
// }

// 3

// function checkText() {
//     var inputText = document.getElementById("inputText").value;
    
//     if (inputText.includes("JavaScript")) {
//         alert("Текст містить слово JavaScript");
//     } else {
//         alert("Текст не містить слово JavaScript");
//     }
// }


// 4

// function checkNumber() {
//     var inputValue = parseFloat(document.getElementById("inputNumber").value);
    
//     if (inputValue > 10 && inputValue < 20) {
//         alert("Число входить в діапазон від 10 до 20");
//     } else {
//         alert("Число не входить в діапазон від 10 до 20");
//     }
// }

// 5

// function validateForm() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     if (name.length < 3 || email.indexOf('@') === -1 || email.indexOf('.') === -1 || password.length < 6) {
//         alert("Дані введені неправильно");
//     } else {
//         window.location.href = "інша_сторінка.html";
//     }
// }



const textInput = document.getElementById('textInput');
    const changeButton = document.getElementById('changeBtn');

    changeButton.addEventListener('click', () => {
      const newText = textInput.value;
      changeButton.textContent = newText;
    });

    const image = document.getElementById('image');
  image.addEventListener('click', () => {
    image.src = 'https://i.pinimg.com/736x/c2/9d/97/c29d9761e6e6dbc0b8d6ac0c34e76055.jpg';
  });

  const link = document.getElementById('link');
    const linkedImage = document.getElementById('linkedImage');

    link.href = 'https://p4.wallpaperbetter.com/wallpaper/924/442/536/car-wallpaper-preview.jpg';
    linkedImage.alt = '';

    const list = document.getElementById('list');
    const firstListItem = list.querySelector('li:first-child');
    firstListItem.textContent = 'Новий текст';









