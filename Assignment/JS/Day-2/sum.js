

function addsum(item) {
    ans = 0;
    for (let i = 0; i < number.length; i++) {
         ans = ans + number[i]
    }
    return ans
}

let number = [1, 2, 3, 4, 5];


console.log("Total sum of all the element :", addsum(number));



