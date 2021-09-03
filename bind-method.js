///bind method
const student = {
    name:'abul',
    id:56,
    class:10,
    income:5000,
    tutionFee: function (fee) {
        // this.income =  5000;
        this.tutionFee = fee;
        this.restMoney = this.income - this.tutionFee;
        console.log(this.restMoney,this);
    }
}
const teacher = {    
    id:56,
    class:10,
    name:'abul',
    income: 10000  
}
const kalamTeacher = student.tutionFee.bind(teacher);///bind method create a new function on teacher object
student.tutionFee(100);
kalamTeacher(500);
kalamTeacher(1000);