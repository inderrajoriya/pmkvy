let count = 0 ;
document.getElementById("d").onclick = function (){
    count-=1;
    document.getElementById("c").innerHTML = count;
}
document.getElementById("r").onclick = function (){
    count-=1;
    document.getElementById("c").innerHTML = 0;
} 
document.getElementById("i").onclick = function (){
    count+=1;
    document.getElementById("c").innerHTML = count;
}