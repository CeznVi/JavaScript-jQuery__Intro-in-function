var getSummElementsArray = function (arr) {
    var summ = 0;

    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                summ = getSummElementsArray(arr[i]);
            }
            else {
                if (typeof arr[i] === 'number') {
                    summ += arr[i];
                }
            }

        }
    }
    else if(typeof arr === 'number') {
        summ = arr;
    }


    return summ;
}
//Реализоавть функцию которая вернет сумму элементов массива любого уровня вложенности
console.log(getSummElementsArray(["sdads", 45, null, -342, [NaN, "sdsda", 456], ['fds', [123, 65, null, 1231]]]))
console.log(getSummElementsArray(["ВАся", 45, null, -658, [NaN, "sdfsdf", 456], ['fd', [124, 658, null, 466]]]));