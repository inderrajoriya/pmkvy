// let stud = ["Inder", "Ayush", "Himanshu", "Himanshu-2", "Aman", "Palwa"]
// console.log("-----------");


// for (let i = 0; i < stud.length; i++) {
//     console.log(stud[i]);

// }


// // ForEACh


// stud.forEach(element => {
//     console.log(element);
// });

// console.log("-----------");
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// num.forEach(ele => console.log(ele))
// console.log("-----------");


// // filter?

// let b = num.filter((ele) => ele % 2 == 0)
// console.log(b);
// console.log("-----------");


// //Map

// let c =num.map((n)=>n*2)
// console.log(c);
// console.log("-----------");


// let d = num.reduce( (acc,curr) => acc + curr , 0 )
// console.log(d);
// console.log("-----------");


// num2=[11,12,13,14]
// num=[...num,...num2]
// console.log(num);

// console.log("-----------");

// //Callfunction



// a();
// b();

// function a() {
//     setTimeout(function () {
//         console.log("Hello");
//     },2000)
// }

// function b() {
//     console.log("Bye");
// }




hello(bye);


function hello(callback) {
    setTimeout(function () {
        console.log("Hello");
        callback()
    },2000)
  
}

function bye() {
    setTimeout(function(){
        console.log("Bye");
    },1000)
    
}