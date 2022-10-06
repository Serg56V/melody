$(document).ready(function () {
    let currentFloor = 2; // перемення, где хранится текущий этаж
    let floorPath = $('.home-image path'); // каждый отдельный этаж в SVG
    let counterUp = $('.counter-up') /* Кнопка увеличения этажа */
    let counterDown = $('.counter-down') /* Кнопка уменьшения этажа */
    
    // функция при наведенияя курсора на єтаж
    floorPath.on('mouseover', function() {
        floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
        $('.counter').text(currentFloor); // записываем значения этажа в счётчик справа
    });
    
    // отслеживаем клик по кнопке вверх
    counterUp.on('click', function() { 
        if (currentFloor < 18) { // проверяем значение этажа, не более 18
            currentFloor++; // прибавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGropping: false});  // форматируем переменную с этажом, чтобы было 01, а не 1
            $('.counter').text(usCurrentFloor); // записываем значение этежа в счётчик справа
            floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
        }
    });

    counterDown.on('click', function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGropping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });
});