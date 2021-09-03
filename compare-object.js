const a = {a:'abul'};
let b = {a:'abul'};
b= a;///reference same so obj same
if(a==b){
    // console.log('hm');
}
else{
    // console.log('no');
}
const student = {
    name:'abul',
    id:56,
    class:10
}
const teacher = {    
    id:56,
    class:10,
    name:'abul'   
}

if(JSON.stringify(student) === JSON.stringify(teacher)){
    // console.log('same'); ///not possible for position change of any keys
}

function checkEquality(student,teacher) {   

    if(Object.keys(student).length!== Object.keys(teacher).length){
        return ('not same objects');
    }
    for (const key in student) {
        // console.log(student[key]);
        if(student[key ] !== teacher[key]){
           return ('not same objects!');
        }
        else{
           return('same');
        }
    }    
}
const equality = checkEquality(student,teacher);
console.log(equality);