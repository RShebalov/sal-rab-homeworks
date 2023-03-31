function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная сумма для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

    // создаем переменную shippingSum - стоимость доставки данного заказа
    let shippingSum;
    // если productsSum равно 0,
    // то shippingSum присваиваем значение 0
    if (productsSum == 0) {
        shippingSum = 0;
    } 
    // если productsSum Больше или равна freeShippingMinSum,
    // то shippingSum присваиваем значение 0
    if (productsSum >= freeShippingMinSum) {
        shippingSum = 0;
    }
    // Вариант более короткой записи:
    // if (productsSum == 0 || productsSum >= freeShippingMinSum) {
    // shippingSum = 0;
    // }
    //     
    // если productsSum больше 0 и меньше freeShippingMinSum,
    // то shippingSum присваиваем значение shippingPrice
    if (productsSum > 0 && productsSum < freeShippingMinSum) {
        shippingSum = shippingPrice;
    }

    // если использовать короткий вариант, то ветку в строках 27-29 можно написать как else,
    // а не if

    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная сумма для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    // создаем переменную discountSum
    let discountSum;
    // можно использовать тернарный оператор:
    // let discountSum = productsSum >= discountMinSum ? discountPart / 100 * productsSum : 0;
    // тогда компактнее и все остальное до строки 59 не нужно.

    // если productsSum больше или равно discountMinSum,
    // то присваиваем discountSum значение discountPart процентов от productsSum,
    // иначе присваиваем discountSum значение 0
    if (productsSum >= discountMinSum) {
        discountSum = discountPart / 100 * productsSum;
    } else {
        discountSum = 0;
    }
    
    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    // создаем переменную totalSum
    let totalSum;
    // присваиваем totalSum значение productsSum
    // уменьшаем totalSum на discountSum
    totalSum = productsSum;
    totalSum = (totalSum - discountSum);
    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    // прибавляем к totalSum значение shippingSum
    totalSum = (totalSum + shippingSum);
    // создаем переменную freeShipping
    // запиcываем без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false
    let freeShipping
    shippingSum == 0 && (freeShipping = true);
    shippingSum != 0 && (freeShipping = false);
    // варианты реализации:
    // а) выполняем присвоение результата сравнения переменной с нулём:
    // let freeShipping = shippingSum == 0;
    // б) используем логическое отрицание:
    // freeShipping = !shippingSum;
       
    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
