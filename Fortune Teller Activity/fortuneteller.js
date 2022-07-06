// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE
var fortune = 9

// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE
function fortuneTeller(fortune){
    let result;
    if (3 >= fortune && fortune >= 0){
        result = "You have a low fortune."
    }
    else if (7 >= fortune && fortune > 3){
        result = "You have an average fortune."
    }
    else if (10 >= fortune && fortune > 7){
        result = "You have a great fortune."
    }
    else {
        result = "Your fortune cannot be read correctly."
    }
    return result;
}

console.log(fortuneTeller(9))




