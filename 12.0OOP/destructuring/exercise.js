let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

/////

let planetFacts = {
    numPlanet: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanet, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

/////

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
  getUserData({firstName: "Melissa"}) // ?
  getUserData({}) // {firstName: 'Melissa', favoriteColor: 'Green'}

/////

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // "Maya"
console.log(second); // "Marisa"
console.log(third); // "Chi"

/////

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // "Raindrops on roses"
  console.log(whiskers); // "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings); // {"Bright copper Kettles", "warm woolen mittens", "brown paper bags tied up with strings"}

/////

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]

/////



var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;
  
  const {a,b} = obj.numbers;

/////

var arr = [1, 2];

// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

[arr[0],arr[1]] = [arr[1],arr[0]];
console.log(arr)

/////

const raceResults = ([first,second,third, ...rest]) => ({first,  second, third, rest})

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/
