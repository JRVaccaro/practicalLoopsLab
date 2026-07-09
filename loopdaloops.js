/*Part 1: Fizz Buzz

To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - 
experiment with what you think is the most efficient. Once you have solved the problem, 
ask yourself if there could be another way; and if so, would it be better.

Accomplish the following:

Loop through all numbers from 1 to 100.

If a number is divisible by 3, log “Fizz.”

If a number is divisible by 5, log “Buzz.”

If a number is divisible by both 3 and 5, log “Fizz Buzz.”

If a number is not divisible by either 3 or 5, log the number.*/


//for( let i = 0; i < 101; i++){
// console.log(i);
//if(i % 3 === 0 && i % 5 === 0){
//  console.log("Fizz Buzz")
//} else if( i % 5 === 0){
//  console.log("Buzz")
//} else if (i % 3 === 0){
//console.log("Fizz")
//}else{
//console.log(i)
//}
//}


/* Context: A prime number is any whole number greater than 1 that cannot 
be exactly divided by any whole number other than itself and 1. For example, 
the number 5 is prime because it cannot be divided by 4, 3, or 2; 
it can only be divided by itself (5) and 1. Similarly, 
the numbers 7 and 11 are prime. As numbers become larger, 
determining whether or not they are prime is increasingly difficult, 
but loops make this process relatively easy!

Write a script that accomplishes the following:

Declare an arbitrary number, n.

Create a loop that searches for the next prime number, starting at n and 
incrementing from there.


As soon as you find the prime number, log that number and exit the loop.

Continuing with the example above, if n is equal to 4, your loop should log 5. 
Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. 
Test your loop with higher numbers and reference an online prime number table to
 determine the accuracy of your code.

Be careful! If you set n to a number too large, your loop could take a long time to process.*/

/*let n = 3;

let isPrime = true; 

if(n <= 1){
    isPrime = false;

}
    for(let i = 2; i < n; i++){
    if(n % i === 0){
        isPrime = false;
        break;

} console.log(isPrime)
    }*/

//Part 3 Feeling Loopy *sobs*

let csv = "ID, Name, Occuptation, Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let selectedCell = 1;

for(let i = 0; i < csv.length; i++){

    let letter = csv[i];

if(letter === ','){
    selectedCell++;

}

else if (letter ==="\n"){
    console.log(cell1, cell2, cell3, cell4);

    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";

    selectedCell = 1;
    
}
else if (selectedCell === 1){
        cell1 += letter;

    }
else if (selectedCell === 2){
        cell2 += letter;
    
} else if (selectedCell === 3){
    cell3 += letter;
}
else {
    cell4 += letter;
}
console.log(cell1, cell2, cell3, cell4);
}
