// --------------- Object Shorthand ------------------- //

// function makePerson(first, last, age){
//     return{
//         first: first,
//         last: last,
//         age: age,
//         isAlive: true
//     }
// }

function makePerson(first,last,age){
    return{
        first,
        last,
        age,
        isAlive: true
    };
}

// const mathStuff = {
//     x: 200,
//     add: function(a,b){
//         return a + b;
//     },
//     square: function(a){
//         return a * a;
//     }
// };

const mathStuff = {
    x: 200,
    add(a,b){
        return a + b;
    },
    square(a){
        return a * a;
    }
};

// ------------ Computed Property Names --------------- //

// const color = {
//     periwinkle: '9c88ff',
//     '9c88ff': 'periwinkle'
// }

function makeColor(name, hex){
    return{
        [name]: hex,
        [hex]: name,
    }
}

const mystery = {
    [6 + 7]: 'thirteen'
}