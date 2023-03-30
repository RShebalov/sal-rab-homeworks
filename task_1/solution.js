function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

    // создаем переменную message
    let message;
    // присваиваем переменной message значение переменной productName
    message = productName;
    // добавляем в конец переменной message пробел
    message = message + ' ';
    // добавляем в конец переменной message текст 'за'
    message = message + 'за';
    // добавляем в конец переменной message пробел
    message = message + ' ';
    // добавляем в конец переменной message значение переменной productPrice
    message = message + productPrice;
    // добавляем в конец переменной message пробел
    message = message + ' ';
    // добавляем в конец переменной message текст 'теперь в корзине!'
    message = message + 'теперь в корзине!';
    // выводим переменную message в консоль
    console.log(message);

    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

    // создаем переменную newValue
    let newValue;
    // присваиваем ей значение oldValue
    newValue = oldValue;
    // увеличиваем значение newValue на 1
    newValue++;

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    // создайте переменную newSum и присвойте ей сумму oldSum и difference
    let newSum = oldSum + difference;
    // создайте переменную newSumText и присвойте ей результат склеивания переменной newSum и текста ' ₽'
    let newSumText = newSum + ' ₽';
    // замените склеивание, используемое в newSum Text на шаблонную строку
    newSumText = `${newSum} ₽`;

    // Конец решения задания №1.3.

    return newSumText;
}

