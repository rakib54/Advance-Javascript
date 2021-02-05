const Friend = {
    firstName : 'Rakibur',
    lastName : 'Rahman',
    Salary : 25000,
    getFullName : function(){
        console.log(this.firstName, this.lastName)
    },
    ChargeBill :function(amount){
        
        this.Salary = this.Salary -amount;
        return this.Salary;
    }
}

const hero = {
    firstName: 'Shakib',
    lastName :'Khan',
    Salary : 50000
}
const friendlyPerson = {
    firstName: 'Shakib',
    lastName :'Khan',
    Salary : 50000
}
// Friend.ChargeBill();
const Bill = Friend.ChargeBill.bind(hero);
Bill(5000);
Bill(200);

console.log(hero.Salary)