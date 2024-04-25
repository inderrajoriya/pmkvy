
start()

function start() {
    wakeUp( ()=>{
        Brush( ()=>{
            shower( ()=>{
                breakfast(()=>{
                    goCllg(()=> {
                        console.log("Done :) ");
                    })
                })
            })
        })
    })
}

function wakeUp(callback) {
    setTimeout(function () {
        console.log("uth gya hu...");
        callback();
    },4000)
}

function Brush(callback) {
    setTimeout(function () {
        console.log("apke toothpaste m namaK...");
        callback();
    },3000)
}    

function shower(callback) {
    setTimeout(function () {
        console.log("Naha b liya...");
        callback();
    },1000)
}    
function breakfast(callback) {
    setTimeout(function () {
        console.log("Kha liya...");
        callback();
    },2000)
}    
function goCllg(callback) {
    setTimeout(function () {
        console.log("Tata Bye Bye Gaya ...");
        callback();
    },1000)
}    




