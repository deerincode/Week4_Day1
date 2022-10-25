////////////////////////////////
// Easy Going
////////////////////////////////


// FUNCTION 1

const logNumbers = () => {

    for(let i = 1; i <= 20; i++){
        console.log(i)
    }
}

//logNumbers()

////////////////////////////////
// Get Even
////////////////////////////////

const logEvenNumbers = () =>{

    for(let i = 2; i <= 200; i += 2){
        console.log(i)
    }
}

const logEvenNumbersAlt = () =>{

    for(let i = 0; i <= 200; i ++){
        if(i % 2 == 0 && i !== 0) {
            console.log(i)
        }
    }
}

// logEvenNumbers()
// logEvenNumbersAlt()

////////////////////////////////
// Fizz Buzz
////////////////////////////////

const logFizzBuzz = () =>{

    for(let i = 1; i <= 100; i++){
        if((i % 3 == 0) && (i % 5 == 0)){
            console.log("FizzBuzz")
        }else if(i % 3 == 0){
            console.log("Fizz")
        }else if(i % 5 == 0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }

}

logFizzBuzz()

////////////////////////////////
// Wild Wild Life
////////////////////////////////


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////


////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////