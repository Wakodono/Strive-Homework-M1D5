/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

function area(l1, l2) {
     return l1 * l2;
};
console.log(area(12, 17))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, 
but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum (integer1, integer2){
    if(integer1 === integer2){
        return (integer1 + integer2)*3
    }else{
       return integer1 + integer2
    }
}

console.log(crazySum(5, 4))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(n){
if (n > 19) {
    return Math.abs(n-19)*3
} else {
    return Math.abs(n-19)
}
}
console.log(crazyDiff(12))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
function boundary(n) {
    if ((n > 20 && n <= 100) || n === 400) {
      return true;
    } else {
      return false;
    }
  }
console.log(boundary(45))


/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(str){
    if (str.startsWith("Strive")) {
        return str;
      } else {
        return "Strive " + str;
      }
}
console.log(strivify("school"))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7(n){
    if (n >= 0 && n % 3 === 0 || n % 7 === 0) {
        return true
    } else {
        return false
    }
}

console.log(check3and7(6)
)
/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

function reverseString(str){
    let splitString = str.split("")
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join("")
    return joinArray
}
console.log(reverseString("Supercalifragilisticexpialidocious"))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  console.log(upperFirst("centurion"));


/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

//use slice to manipulate string to achieve this 

function cutString(str) {
    return str.slice(1, str.length - 1);
  }
  console.log(cutString("sayonara"));


/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n) {
    const arr = [];
    for (let i = 0; i <= n; i++) {
        const random = (Math.floor(Math.random() * 10))
      arr.push(random);
    }
    return arr;
  }
  console.log(giveMeRandom(9));
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/