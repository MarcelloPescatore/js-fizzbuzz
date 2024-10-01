// test the link with html file
console.log("test");


// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda: Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?


// Analize the assignment
// First of all divede the workflow in 3 steps


// 1. useful tools
//  - cicle for
//  - relational and logical operators
//  - Arithmetic operators


// 2. Proceede to set up the code 

// We need a program that stamp numbers from 1 to 100
// Then we put 2 conditions:
// 1. if the number is a multiply of 3, stamp "Fizz"
// 2. else if the number is a multiply of 5, stamp "FizzBuzz"
// else stamp the number

// 3. Output
for (let number = 1 ; number < 100 ; number++){
    if (number % 3 == 0){
        console.log('Fizz')
    } else if (number % 5 == 0){
        console.log('FizzBuzz')
    } else {
        console.log(number)
    }
}

// Complete the assignment

