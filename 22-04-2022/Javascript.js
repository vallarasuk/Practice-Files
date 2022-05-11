27 - 04 - 2022

let Name = "vallarasu k";

let age = "20";

let gender = "MALE "

let marriage = "false";

let address = " 4/46 , soulkottai (vill) , jagadap (post), Krishnagiri (dt & tk )"


console.log(Name,
    age, gender, marriage, address)


//objects

let person = {
    name: "vicky",
    dob: 20,
    gender: "female",
    marriage: true,
    address: "4/46 , soukottai (vill), jagadap (post), Krishnagiri(dt &tk)"
}


person.dob = 40

// console
console.log(person)

// particular specimens


// Dot notation methods
console.log(person.gender)


// Bracket Notation methods
console.log(person['marriage'])


// other examples

let family = {
    name: "My family",
    place: "United states of AMERICA",
    gender: undefined,
    helpingMindset: "true",
    homeTown: "India",
    brothers: {
        sister: "anbu",
        daughter: "Hasani"
    }
}

// dot-notation method 
console.log(family.brothers.daughter)

family.gender = "male"




function clientName(firstName, lastName) {

    // set of statements
    let family = "Hello...!    " +
        firstName + " " + lastName + "           Welcome Back.......?";
    console.log(family)

}

clientName("vallarasu", "K")




function per(numberOne, numberTwo) {

    // Statements
    let add = "Dear New Person.....!    " + numberOne + " We are Hear To solve Yours problems    " + numberTwo + "      Connect With US ";

    console.log(add);

}
per("VALLARASU", "KANTHASAMY  ")

function add(numberOne, numberTwo) {

    // Statements
    add = (numberOne + numberTwo)

    console.log(add);

}

// add(45, 55)
// Result
add(200, -150)

// Subtractions

function Sub(numberOne, numberTwo) {

    // statements
    let Subtractions = (numberOne - numberTwo);

    console.log(Subtractions);

}

Sub(-40, -10)

// Multiplications

function Multiplications(numberOne, numberTwo, numberThree) {

    // Statements
    let Multiplications = (numberOne * numberThree * numberTwo)

    console.log(Multiplications);
}

Multiplications(2, 3, 1)


// Division

function Division(numberOne, numberTwo, numberThree) {
    // statements
    let Division = (numberOne / numberTwo / numberThree)
    console.log(Division);

}

Division(50, 5, 2)



// Arithmetic Operators

let numberOne = 1;
let numberTwo = 1;
let numberThree = 1;


// addition operation 
console.log(numberOne + numberTwo++);

console.log(numberOne + numberTwo);

console.log(++numberOne - numberTwo);

console.log(numberOne + numberTwo);


// subtraction operation
console.log(--numberOne - numberTwo);

console.log(numberOne + numberTwo);

console.log(numberOne - numberTwo--);

console.log(numberOne + numberTwo);


// Multiplication operation
console.log(numberOne * numberTwo);

console.log(numberOne + numberTwo--);

// Division operations
console.log(numberOne / numberTwo);




// Assignment Operators


// Additions
let x = 3;
// x+=3;
x = x + 3;
console.log(x);

// Subtractions

let y = 4;
// y-=2;
y = y - 2;

console.log(y);

// Multiplications

let z = 10;
// z*=2;
z = z * 2;

console.log(z);

// Divisions

let d = 50;
// d /= 5;
d = d / 5;

console.log(d);



// comparison operators

let one = 5;
let two = 5;

console.log(one > two); //greater then 

console.log(one >= two); //greater than or equal too

// result will get always in TRUE or FALSE in comparison Operators


let on = 2;
let tw = 2;


console.log(on < tw); //less than

console.log(on <= tw); //less than or equal too


// Equality operators


// strict equality operator (datatype + value)
console.log(1 === 1); //number  === number
console.log('1' === 1); //string === number

// lose Equality Operators

console.log(1 == 1); //number == number
console.log('1' == 1); //string == number     //NUMBER automatically converts into STRING its becomes true


console.log(true == 1); // Works with STRING,NUMBER,BOOLEAN ETC.... 



// TERNARY OPERATORS

//If person's age is more than 18,

//They are 'Adults' category , otherwise,

//They are a 'child' category.



// Age Examples

let ages = 18;

let type = ages >= 18 ? "ADULT Tickets" : "CHILD Tickets";

console.log(type);


// teenage girl

let teen = "19";

let types = teen <= 18 ? "small girl" : "Teenage girl";

console.log(types);



let ag = 18;
let tye = ag >= 18 ? "big" : "small";

//condition ?  TRUE means will get first value,
//condition ? FAIL means will get second value in yours command.

console.log(tye);



//LOGICAL OPERATORS


//Logical AND (&&)
//return TRUE if both operands are TRUE
console.log(true && true);

console.log(false && true);

console.log(true && false);


//Logical OR (||)
//Return TRUE if anyone operands are TRUE

console.log(true || false);

console.log(true || true);

//Not(!)

//opposite of users input if you give TRUE but the result will get opposite value FALSE

console.log(!true);



//LOGICAL OPERATORS
//High income , CIBILSCORE  ->Loan Eligible
//low income , CIBILSCORE  -> loan Not Eligible

let highIncome = true;
let cibilScore = true;
// logical AND operators
let eligiblePerson = highIncome && cibilScore;

console.log("status Loan--->   " + eligiblePerson);



let eligiblePerson1 = highIncome || cibilScore;

console.log("status Person--->   " + eligiblePerson1);


let applicationStatus = !eligiblePerson;

console.log("Application Status--->   " +
    applicationStatus);