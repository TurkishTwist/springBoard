// ---------------- OOP Intro ------------------------ //

//Review Objects in JS, define classes in JS, use classes to create instances
//Describe constructors and inheritance. Define OOP terms

//------------------ Object review ----------------- //

const color = 'teal';

const obj = {};         // creates empty obj array
obj.color = '#3723FF';   // .color = key ; #3723FF = value;
obj[color] = '#3723FF';

for(let [k,v] of Object.entries(obj)){ 
    console.log(k,v);
}

//ALL KEYS ARE STRINGIFYED

// ----------------- Object methods ------------------ //

// const add = (x,y) => x + y;
// const mult = (x,y) => x * y;
// const square = (x) => x * x;
// const power = (x,y) => x ** y;

// const myMath = {};
// myMath.add = add;
// myMath.mult = mult;

// const myMath = {
//     add: function(x,y){
//         return x + y;
//     },
//     mult: function(x,y){
//         return x * y;
//     },
//     square: function(x){
//         return x * x;
//     },
//     power: function(x,y){
//         return x ** y;
//     }
// };

const myMath = {
    add(x,y){
        return x + y;
    },
    mult(x,y){
        return x * y;
    },
    square(x){
    return x * x;
    },
    power(x,y){
        return x ** y;
    }
};


// ---------------- This and Methods ------------------ //

function getHypotenuse(a,b) {
    return Math.sqrt(a ** 2 + b ** 2);
}
function getArea(a,b) {
    return a * b / 2;
}

let side1 = 4;
let side2 = 3;
const side3 = getHypotenuse(side1,side2);

const area = getArea(side1, side2);
side1 = 9;
side2 = 12;
getHypotenuse(9,12);

let triangle = {
    a: 3,
    b: 4,
    getArea: function(){
        return (this.a * this.b) / 2;
    }
};

const rightTriangle = {
    a: 9,
    b: 12,
    printThis(){
        console.log(this.a);
    },
    getArea(){
        return this.a * this.b / 2;
    },
    getHypotenuse(){
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
};


// --------- Constructor functions and New -------------- //

// Triangle.prototype.getArea = function(){
//     return this.a * this.b / 2;
// }

// Triangle.prototype.getHypotenuse = function(){
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
// }


// function Triangle(a,b){
//     this.a = a;
//     this.b = b;
// }


// -------------------- Class intro --------------------- //

class Triangle{  
    constructor(a,b,c){ // -------Adding Constructors ------ // 
        console.log('Inside TRIANGLE constructor');
        for(let side of [a,b,c]){
            if(!Number.isFinite(side) || side <= 0){
                throw new Error('Sides must be positive numbers');
            }
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }       //create class
    greet(){            //class method -- added to class prototype
        console.log("Hello from triangle");
    }
    display(){          //class method -- added to class prototype
        return `Triangle with the sides of ${this.a}, ${this.b} and ${this.c}`;
    }
    getArea(){ //------ adding methods -----//
        const{a,b,c} = this;
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s -a) * (s - b) * (s - c));
    }
    isBig(){ //------- methods within arguments ------//
        return this.getArea() > 50;
    }
}

const t1 = new Triangle(3,4,5);
const t2 = new Triangle(5,9,10);
const t3 = new Triangle(30,40,50);

// ----------- Extends & Super ------------------- //

class RightTriangle extends Triangle{  
    constructor(a,b,c){ // -------Adding Constructors ------ // 
        if (a * a + b * b !== c * c){
            throw new Error('Invalid C side for right trianble!');
        }
        console.log('Inside RIGHT TRIANGLE constructor')
        super(a,b,c);
        this.hypot = c;
    }
    isRightTriangle(){
        return true;
    }
    display(){
        return "Right " + super.display()
    }
}