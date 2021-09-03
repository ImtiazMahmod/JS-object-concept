///loop object
const man = {
    name: 'abul',
    id: 56,
    hobby: 'reading',
}

// for loop
/* 
for(let i; i>5; i++){}
for (const element of array) {}  //array    for of takes value 
for (const key in object) {}     //object for in takes index 
*/

for (const key in man) {
    // console.log(key);
}

const keys = Object.keys(man);
for (const key of keys) {
    // console.log(key);
    // console.log(key,man[key]);
}

const entities = Object.entries(man);
// console.log(entities);
for(const entity of entities){
    // console.log(entity);
}
for (const [key,value] of entities) {///destruturing [key,value]=[name,abul]
    // console.log(key,man[key]);
    console.log(key,value);
}