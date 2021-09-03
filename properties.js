//object properties//
//keys, values, entries, delete, seal, freeze
const man = {
    name: 'abul',
    id: 56,
    hobby: 'reading',
}
const keys = Object.keys(man);
// console.log(keys);

const values = Object.keys(man);
// console.log(values);

const entities = Object.entries(man);
// console.log(entities);
Object.seal(man);//after seal object only change value but not to add or delete any value
man.hobby= 'techy';///change value
// console.log(man);
man.aim = 'to do';//not add
// console.log(man);

Object.freeze(man);//after freezing not change any value not add nor delete any value
man.hobby = 'thinking';
console.log(man);

