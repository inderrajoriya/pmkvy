


const dishes = ["Chiken chili", "Momos", "Pasta", "Sev Puri", "Taccos", "Idali pav"]

for (let i = 0; i < dishes.length; i++) {
    console.log(dishes[i]);
}



const newArr = dishes.filter(item => item.length > 5);

console.log(newArr);




// var a=[1,2,3,4,5,6,7,8,9,10]
// let b= a.filter( (item)=> item%2==0)
// console.log(b);
// console.log(a);

function con(n) {

    if (n > 0) {
        console.log("posaitive");
    }
    else if (n < 0) {
        console.log("Negative");
    }
    else {
        console.log("zero");
    }

}
con(3)