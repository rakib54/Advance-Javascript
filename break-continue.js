const array = [1, -2, 3, 4, -5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {

    if (array[i] > 5) {
        break;              //stop the condition
    }
    console.log(array[i]);
}


for (let i = 0; i < array.length; i++) {

    if (array[i] < 0 ) {
        continue;        //skip the condition
    }
    console.log(array[i]);
}