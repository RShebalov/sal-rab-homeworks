function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    // product - объект вида {id: id, title: title, count: count, price: price}
    // например, {id: 1, title: 'Пицца', count: 5, price: '500.00'}, где
    // id - идентификатор
    // title - наименование
    // price - цена
    // count - количество
    
    // сформируйте строку itemCountText вида:
    // количество × цена ₽ = стоимость ₽
    // например,
    // 5 × 500.00 ₽ = 2500 ₽

    // 1. Создаем переменную itemCountText, равную пустой строке
    // let itemCountText = '';
    // 2. Присваиваем переменной itemCountText результат склеивания itemCountText и количества
    // itemCountText = itemCountText + product.count;
    // 3. Присваиваем переменной itemCountText результат склеивания itemCountText и ` × `
    // itemCountText = itemCountText + ` × `;
    // 4. Присваиваем переменной itemCountText результат склеивания itemCountText и цены
    // itemCountText = itemCountText + product.price;
    // 5. Присваиваем переменной itemCountText результат склеивания itemCountText и ` ₽ = `
    // itemCountText = itemCountText + ` ₽ = `;
    
    // Более короткий вариант шагов 2 - 5
    // itemCountText = `${itemCountText + product.count} × ${product.price} ₽ = `;

    // 6. Создаем переменную sum и присваиваем ей значение произведения количества и цены
    // let sum = product.count * product.price;
    // 7. Присваиваем переменной itemCountText результат склеивания itemCountText и sum
    // itemCountText = itemCountText + sum;
    // 8. Присваиваем переменной itemCountText результат склеивания itemCountText и ` ₽`
    // itemCountText = itemCountText + ` ₽`;
   
    // Более короткий вариант шагов 7 - 8
    // itemCountText = `${itemCountText}${sum} ₽`;

    // еще более короткий вариант - вместо шагов 1- 8
    let itemCountText = `${product.count} × ${product.price} ₽ = ${product.count * product.price} ₽`;

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
