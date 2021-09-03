///call apply 
///borrow object method to another
const student = {
    name:'abul',
    id:56,
    class:10,
    income:5000,
    tutionFee: function (fee,vat) {
        // this.income =  5000;
        this.tutionFee = fee;
        this.restMoney = this.income - this.tutionFee-vat;
        console.log(this.restMoney,this);
    }
}
const teacher = {    
    id:56,
    class:10,
    name:'abul',
    income: 10000  
}

//call---comma 
// student.tutionFee.call(teacher,500,20);
//apply ---array
// student.tutionFee.apply(teacher,[1000,100]) 

