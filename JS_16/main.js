// Задача 1

const number = 12;
const number_2 = number % 2; 

if (number_2 == 0) {
    console.log("Число чётное")
} else {
    console.log("Число нечётное")
}

// Задача 2

const age = 18;

const discount = (age < 18) ? "10%" : (age >= 18 && age <= 65 ? "20%" : "30%");
console.log(discount)

// Задача 3

const username = prompt("Введите имя пользователя", "admin");
const password = prompt("Введите пароль", 123456);

switch (username && Number(password)) {
    case "admin":
    case "user":
    case Number(123456):
        console.log("Доступ разрешён");
        break;
    default:
        console.log("Доступ запрещён");
}


// Задача 4

const weight = prompt("Введите вес посылки:", "10"); 
const delivery = prompt("Введите тип доставки", "Стандарт");

// 2
if (Number(weight) <= 0) {
    console.log("Некорректный вес посылки!");
}

if (delivery == "Стандарт" || delivery == "Экспресс" || delivery == "Премиум") {
} else {
    console.log("Неверный тип доставки!");
}

// 3
const price = (Number(weight) < 1) ? "5" :(Number(weight >= 1 && weight <= 5) ? "10" : "15");
console.log(`Базовая стоимость доставки: ${price}$`)

// 4
var index = 0;

switch (delivery) {
    case "Стандарт":
        index = 1;
        console.log(`"Стандарт:" коэффициент ${index}`);
        break;
    case "Экспресс":
        index = 1.5;
        console.log(`"Экспресс:" коэффициент ${index}`);
        break;
    case "Премиум":
        index = 2;
        console.log(`"Премиум:" коэффициент ${index}`);
        break;
}

// 5
const final_price = Number(price) * index;

// 6
alert(`Итоговая стоимость доставки: ${final_price}$`)