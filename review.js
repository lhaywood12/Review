/*Constructors*/

// build an object
//object literal

//this is one way of building an object
let obj1= {
    a: 'yes',
    b: 'no',
    c: true,
    d: false,
    e: 3
}

//this is the second way, using the new keyword

let obj2 = new Object();// same thing as let onb2 = {}
obj2.name = 'Satch';
obj2.hobby = 'Collecting Vinyl';
obj2.age = 42;

console.log(obj2);

//this is the third way, Object.create()

let obj3 = Object.create({baseball: 'Eagles', basketball: 'Lakers', football: 'Cowboys', hockey:'Oilers'});

console.clear();
//this is the fourth way
// class based object => prototype
class Person {
    constructor() {
        this.name
        this.age
        this.hobby
        this.occupation,
        this.bestHanded
    }

    sayName(){
        console.log(`My name is ${this.name}`)
    }
}

let satch = new Person();

satch.name = 'Satch';
satch.age = 42;
satch.hobby = 'Collecting vinyl';
satch.occupation = 'Instructor';
satch.bestHanded = 'right';

console.log(satch);


satch.sayName();

let remi = new Person();

remi.name = 'Remilekun';
remi.age = 20;
remi.hobby = 'coding';
remi.occupation = 'Boss lady';
remi.bestHanded = 'right';

console.log(remi);
remi.sayName();

const gameBoard = document.getElementById('gameBoard');
const gameBoardCTX = gameBoard.getContext('2d');

const boardBorder = 'royalblue';
const boardBackground = 'pink';

gameBoardCTX.fllStyle = boardBackground;
gameBoardCTX.strokeStyle = boardBorder;
gameBoardCTX.fillRect(0, 0, gameBoard.clientWidth, gameBoard.height);
gameBoardCTX.strokeRect(0, 0, gameBoard.clientWidth, gameBoard.height);

//Methods

console.clear();
// global function
const sayHello =(name)=> {
    console.log(`Hello ${name}`);
}

sayHello('Brendon');

let newObj = {
    show: 'The Simpsons',
    characters: ['Homer', 'Bart', 'Marge', 'Maggie', 'Lisa'],

    returnCharacters: ()=>{
        newObj.characters.forEach(character => {
            console.log(character);
        })
    }
}

newObj.returnCharacters();

/*newObj.characters[0]; //Homer*/

const section2 = document.getElementById('section2');

let div = document.createElement('div');

let h2 = documment.createElement('h2');
let pTag = document.createElement('p');

h2.innerText = 'Betty White';;
pTag.innerText = 'RIP';

//console.log(pTag);

div.appendChild(h2);
div.appendChild(pTag);

div.innerHTML+= `<p>Thank you.</p>`

section2.appendChild(div);



//switch
//evaluates an expression and matches the expression's value to a case

/*
switch (expression) {
    case value1:
        do stuff
        break;
    case value2:
        do something else
        break;
    case value3:
        do some other stuff
        break;
    case valueN:
        do the nth stuff
        break;
    default:
        something else done
        break;
}
*/

let today = new Date();
let day = today.getUTSDay(); //2

switch(day) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 2:
        console.log('Thursday');
        break;
    default:
        console.log('Some other day')
        break;
}

if(day == 0) {
    console.log('Sunday')
} else if (day == 1) {
    console.log('Monday')
} else if (day == 2) {
    console.log('Tuesday')
} else {
    console.log('Some other day')
}

console.clear()

//Example
class GameData {
    constructor() {
        this.data = {
            life: 100,
            attack: 100,
            lives: 3
        }
    }

    getHit() {
        this.data.life = this.data.life - 10;
        this.data.attack = this.data.attack - 10;
        console.log(this.data.life);
        if this.data.life == 0;
    }

    loseLife() {
        if (this.data.life == 0) {
            this.data.lives = this.data.lives - 1;
        }
    }

    gameOver() {
        if (this.data.lives == 0) {
            console.log('Game Over')
        }
    }
}

let action = new GameData();

action.getHit();
action.getHit();


//for in loops
/*
for in loops => how to loop through objects

for (let key/prop in obj) {
    //do stuff
}
*/

let albums = [
    {
    artist: 'Jahari Massamba Unit',
    ablumTitle: 'Pardon My French',
    label: 'Madlib Invasion',
    serial: 'MMS 042',
    style: 'electronic',
    year: 2020,
    ensemble: ['Karriem Riggins', 'Madlib']
 },
 {
     artist: 'Ramsey Lewis',
     albumTitle: 'Sun Goddess',
     label: 'Columbia',
     serial: 'KC 33194',
     style: 'j*zz',
     year: 1974,
     ensemble: [
         'Ramsey Lewis', 'Cleveland Eaton', 'Maurice Jennings', 'Maurice White', 'Verdine White', 'Charles Stepney'
     ]
 },
 {
     artist: 'Miles Davis',
     albumTitle: 'Sorcerer',
     label: 'Columbia',
     serial: 'CS 9532',
     style: 'j*zz',
     year: 1967,
     ensemble: ['Miles Davis', 'Herbie Hancock', 'Wayne Shorter', 'Tony Williams', 'Ron Carter']
 }
 
]

//for (let key in album) {
  //  console.log(album[key])
//}

//for (let key in album) {
  //  if (key == 'label') {
    //    console.log(album[key])
    //}
//}

/*
Loop through albums array; return albumTitle for albums under the Columbia label => Sun Goddess & Sorcerer
*/

for (let i = 0; i < albums.length; i++) {
    for (let prop in albums[i]) {
        if (albums[i][prop] == 'Columbia') {
            console.log(albums[i].albumTitle)
        }
    }
}

//Using HTML elements use innerHTML
//Using Text elements use innerText

let text = document.getElementById('text');
text.innerText = 'Hi, my name is Lauren';

let section3 = document.getElementById('section3');
let element = document.createElement('h1');

newElement.appendChild(document.createTextNode(`This is an h1, too`))
section.appendchild(newElement);


//Calling Function
randomCallback();

function randomCallback() {
    console.log('I ran');
}

const otherRandomCallback = () => {
    console.log('Expression Ran')
}

function randomCallback() {
    console.log('This is a text');
}

let button = document.getElementById('button');

button.addEventListener('click', (apple) => {
    console.log(apple.target)
})


console.clear();

/* .map & .filter()

   .map => takes an aray and returns a new array after you do stuff to the items in the array

   works like a for each loop; the difference is a for each loop just does stuff; map returns a new array

   .filter => takes an array and returns an array that is a subset of the original array
*/

let fruits = [
    'banana', 'apple', 'grape', 'cherry', 'pineapple', 'strawberry', 'kiwi', 'lemon', 'orange'
];

//Makes an indivdual sentence of each fruit
fruits.forEach(fruits => {
    console.log(`I like ${fruit}`)
});

//Makes a array
let fruitbasket = [];

fruits.forEach(fruit => {
    fruitbasket.push(`${fruit}s`)
});

//Make a list of each fruit
fruits.forEach(fruit => {
    console.log(`${fruit}s`)
})

//.map returns a new array
let newFruit = fruits.map(fruit => {
    return fruit + 's'
})

console.log(newFruits)


//Example of .map
let scores = [75, 56, 88, 100, 82, 79];
let newScores = scores.map(score => {
    return score + 10;
})
//Add 10 to the orginal scores

//[85, 66, 98, 110, 92, 89, 89]
console.log(newScores)


//Example of .map
//If the score is above a 90 the score will stay the same
//If the score is below or equal to 90 then 10 points are added
let newScores = scores.map(score => {
    if (score <= 90) {
        return score + 10
    } else {
        return score;
    }
});

console.log(newerScores);


scores.forEach(score => {
    console.log(score + 10)
})

//Example .filter
let filteredScores =scoresfilter(score => {
    return score >= 80;
    //Return any scores above 80
    //99, 100, 82
})

console.log(filteredScores)

let obbScores = scores.filter(score => {
    return score % 2 == 1;
})// 75, 79, 79

console.log(oddScores);

// includes => returns true or false; checks to see if an array includes a certain item

console.log(scores.includes(88));//true
console.log(scores.includes(67));//false

console.log(!scores.includes(88))//false


//.contains Example
let hello = 'hello';

console.log(hello.includes('e'))

//let divs = document.querySelectorAll('.divs');

let section4 = document.getElementById('section4');

let h3 = document.createElement('h3');
section4.appendChild(h3);

//let div1 = document.createElement('div')
// section4.appendChild(div1)
//div1.classList.add('divs');

console.log(section4.contains(h3));

