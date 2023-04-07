// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    // Аргументом функции является JSON

    // Преобразуем строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
    // и записываем в переменную data
    // Возвращаем как результат функции свойство products объекта data
    let data = JSON.parse(json);
    let products = data.products;
    return data.products;
}

// Пишем функцию renderProductsCards(json)
// Аргументом функции является JSON
    function renderProductsCards(json){
        // Вызываем функцию очистки, если оставались элементы от прошлых запусков
        clearProducts();
        // Выполняем функцию parseProducts с аргументом == json и записываем результат в переменную products
        let products = parseProducts(json);
        // Сохраняем в переменную length значения свойства products.length
        length = products.length;
        // Пишем цикл для перебора всех элементов products и выполняем addProduct с каждым элементом
        for (let i = 0; i < length; i += 1) {
            addProduct(products[i]);
        }
    }


