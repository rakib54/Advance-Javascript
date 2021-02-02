//program 1

function add(num1, num2) {

    var addNumber = num1 + num2
    console.log(addNumber)  //can call inside the scope
    return addNumber;

}
const result = add(19, 12);
console.log(addNumber);   //can't call local/block scope outside the scope/function.   
console.log(result);


//program 2

let bonus = 5;        //global scope

function add(num1,num2){
    // console.log(bonus)   //get access inside function
    const AddNumber = num1 + num2 + bonus;
    
    if(AddNumber > 80){
        let  mood = 'happy'
        mood = 'very happy'
        console.log(mood)
    }
    return AddNumber;
}

const result = add(40,45);
console.log(bonus);       //get access outside function
console.log(result);