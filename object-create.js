///object-create 
//1. direct object declaration
const person = {
    name: 'abdul',
    id: 456,
    subject: ['bangla','english','math']
}
// console.log(object);

//2. using new keyword ///object constructor
const obj = new Object();
// console.log(obj);

// 3. create constructor
const man = Object.create(person);///man object as person object child 
// console.log(man.id);

// 4. classs
class student{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
}
const kalam = new student('kalam',456)
// console.log(kalam);

// 5. function 
function stu(subject,marks) {
    this.subject = subject;    
    this.marks = marks;
}
const azad = new stu('bangla',86);
console.log(azad);