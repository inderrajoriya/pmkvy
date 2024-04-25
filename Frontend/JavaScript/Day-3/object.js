// let obj = {
//     name: "Inder",
//     age: 24,
//     food: ["Momos", "Meggie", "Mango"],
//     Address: {
//         city: "uk",
//         landmark: "nagarpur"
//     },
//     birthday: function () {
//         return 2024 - this.age;
//     }
// }

// console.log(obj);

// console.log("----------");

// console.log(obj.food);
// console.log("----------");

// console.log(obj.birthday());
// console.log("----------");


// let car1 = {
//     brand : "Volvo",
//     getbrand : function () {
//         console.log(`You Drive are driving this ${this.brand}`); 
//     }
// }

// let car2= {
//     brand : "Tasla",
//     getbrand : function () {
//         console.log(`You Drive are driving this ${this.brand}`); 
//     }
// }
// car1.getbrand()
// console.log("----------");
// car2.getbrand()
// console.log("----------");



let car = {
    brand : "GT3",
    getbrand : function () {
        // console.log(`You Drive are driving this ${this.brand}`); 
         return (`you'r flying this ${this.brand} car`); 

    }
}

console.log(car.getbrand());