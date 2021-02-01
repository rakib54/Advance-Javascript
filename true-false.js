// const number =0;  //This is false
// const number; //False
// const name= '' // False
// const name = ' '  //True
// const number = '0'  //True
// let number;   // undefined / False

// const number = null  //False
// const number = NaN;   //False
// const number =[]    //True
// const number ={}    //True
// const number = false; //False
// const number ="false"; //true

//True
const number=0;
console.log(number)
if(number || number==0){
    console.log('This is True')
}
else{
    console.log('This is False')
}