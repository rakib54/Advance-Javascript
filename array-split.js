const array = [10,20,30,40,50,60,70,80,90];
const part = array.slice(2,4);

console.log(part)

const part2 = array.splice(2,7,100);
console.log(part2);
console.log(array);

const together = array.join(',')
console.log(together)