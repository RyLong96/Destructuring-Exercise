//Object Destructuring 1
//What does the following code return/print?

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); //8
// console.log(yearNeptuneDiscovered); //1846




//Object Destructuring 2
//What does the following code return/print?

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};
let {numPlanets, ...discoveryYears} = planetFacts;
console.log(discoveryYears); // [yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659]




//Object Destructuring 3
//What does the following code return/print?

function getUserData({firstName, favoriteColor = 'green'}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}
getUserData({firstName: "Alejandro", favoriteColor: "purple"}); //Your name is Alenjandro and you like purple.
getUserData({firstName: "Melissa"}); //Your name is Melissa and you like green.
getUserData({}); //Your name is undefined and you like green.




//Array Destructuring 1
//What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];
console.log(first); //Maya
console.log(second); //Marisa
console.log(third); //Chi



//Array Destructuring 2
//What does the following code return/print?

let [raindrops, whiskers, ...aFewofMyFavoriteThings] = [
    "Raindrops on roses", 
    "whiskers on kittens", 
    "bright copper kettles", 
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
];

console.log(raindrops); //Raindrops on roses
console.log(whiskers); //whiskers on kittens
console.log(aFewofMyFavoriteThings); //[bright copper kettles, warm woolen mittens, Brown paper packages tied up with strings]




//Array Destructuring 3
//What does the following code return/print?

// let numbers = [10,20,30];
// [numbers[1], numbers[2] = [numbers[2], numbers[1]]];

// console.log(numbers); // [10,30,20]
//20 and 30 are being swapped

//ES5 Assigning Variables to Object Properties

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

// var a = obj.numbers.a;
// var b = obj.numbers.b;

const {numbers} = obj;




//ES5 Array Swap
// let arr = [1,2];


// [arr[0], arr[1] = arr[1], arr[0]]

//raceResults()
//Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.



const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

//this function will accept the array,
//will make tom margaret allison first, second third, the rest will be an array.