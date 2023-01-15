// ----------------- Object destructuring ---------------- //

const teaOrder = {
    variety: 'oolong',
    teaName: 'winter sprout',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 3
}

// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName;

const {price, quantity, teaName, ...others} = teaOrder;
const {origin} = teaOrder;


// ------------- More destructuring ----------------- //

const {brewTemp: temp = 175} = teaOrder;

function checkout(tea){
    const {quantity, price} = tea;
    return quantity * price;
}

console.log(checkout(teaOrder));

// -------------- Array destructuring -------------------- //

const students = [
    {name: 'Drake', gpa: 4.6},
    {name: 'Henrietta', gpa: 4.4},
    {name: 'Tung', gpa: 4.0},
    {name: 'Harry', gpa: 3.8},
    {name: 'Ant', gpa: 3.2}
];

const [first, ...losers] = students;
console.log(first, losers);

// ---------------- Function destructuring ----------------- //

const order2 = {
    variety: 'green',
    teaName: 'silver needle',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 4
}

function getTotal({quantity: qty = 1, price}){
    return quantity * price;
}

//

const longJumpResults = ['Tammy', 'Jessica', 'Violet'];
const swimMeetResults = ['Japan', 'France', 'Chile'];

function awardMedals([gold, silver, bronze]){
    {
        return {
            gold, silver, bronze
        }
    }
}

// ------------------ Nested destructuring ---------------- //

const movie = {
    Title: 'Amadeus',
    Year: '1984',
    Rated: {
        rating: 'R',
        advisory: 'Rated R for brief nudity'
    },
    Released: '19 Sep 1984',
    Runtime: '160 min',
    Genres: ['Biography', 'Drama', 'History', 'Music'],
    Director: 'Milos Forman',
    Ratings: [
        {Source: 'Internet Movie Database', Value: '8.3/10'},
        {Source: 'Rotten Tomatoes', Value: '93%'},
        {Source: 'Metacritic', Value: '88/100'},
    ]
}

// const {Rated} = movie;
// const {rating, advisory} = Rated;

const {Rated: {rating, advisory: note}} = movie;
const {
    Ratings: [
        {Value: imdbRating}, 
        {Value: rtRating}, 
        {Value: metaRating}
    ]
} = movie;

// ---------------------- Destructuring Swap ------------------- //

let delicious = 'Mayonnaise';
let disgusting = 'Whipped Cream';

// let both = [delicious, disgusting];
// [disgusting, delicious] = both;

[disgusting, delicious] = [delicious, disgusting]