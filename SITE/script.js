function func(arr) {
    let summm = 0;

    if(Array.isArray(arr)){
        for(let i=0; i < arr.length; i++){
            if(Array.isArray(arr[i])){
                summm += func(arr[i])
            }
            else if(typeof arr[i] == 'number' && !isNaN(arr[i])){
                summm += arr[i];
            }
        }
    }
    else if(typeof arr == 'number' && !isNaN(arr)){
        summm = arr;
    }
    return summm;
}

console.log(func(["ВАся", 45, null, -658, [NaN, "sdfsdf", 456], ['fd', [124, 658, null, 466]]]));
console.log("Верный ответ: 1091");