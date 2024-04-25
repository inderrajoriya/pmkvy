
//  Rest Parameter are used to take multiple parameter in function

// Sum = function (...num) 
// {

//     ans = 0;
//     for (const n of num) {
//         ans+=n;
        
//     }
//     console.log(ans);
// }

// Sum(1,2)
// Sum(12,34,54)
console.log("--------------");
// Task

multi = function (...arr) {
    return arr.reduce((arr,curr) => arr*curr , 1)
}

var s =  multi(1,2,3)
console.log(s);
 
