///object method
const student ={
    name: 'kalam',
    id: 56,
    subject:['bangla','english','math'],
    totalMarks: function getMarks(bangla,english,math) {
        this.bangla = bangla;
        this.english= english;
        this.math = math;
        this.id = 5;
        const totalmarks = this.bangla + this.english + this.math;
        // console.log(totalmarks);
        return totalmarks;
    }
}
console.log(student.id); 
console.log(student.totalMarks(52,63,96));
console.log(student.bangla); 
console.log(student.english); 
console.log(student.math); 
console.log(student.id);///reference value