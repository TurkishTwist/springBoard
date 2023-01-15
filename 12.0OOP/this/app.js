const cat = {
    name: 'Blue',
    breed: 'Scottish Fold',
    dance: function(dance){
        console.log(`meow, I am ${this.name} and I like to ${dance}`);
    },
    play: function(...toys){
        for(let toy of toys){
            console.log(`${this.name} plays with ${toy}`)
        }
    }
};

cat.dance.call(cat, 'salsa');

function printThis(){
    console.log('This ===> ', this);
}

// const bluesDance = cat.dance;
// bluesDance.call(cat, 'jitterbug');

 const dog = {
     breed: 'Black Lab',
     name: 'Elton'
 };

// bluesDance.call(dog, 'hip hop dance')