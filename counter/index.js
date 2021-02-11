let player1= document.querySelector("#P1");
let player2= document.querySelector("#P2");
let D1= document.querySelector("#D1");
let D2= document.querySelector("#D2");
let Dt= document.querySelector("#DT");
let play1= 0;
let res= document.querySelector("#res");
let till= document.querySelector("input");
let span= document.getElementById("#winner1")
let play2= 0;
let gameOver= false;
let winner= 5;
let enter= document.querySelector("#enter");


enter.addEventListener("change", function(){
        DT.textContent= till.value;
        winner= Number(till.value);
        reset();
 })

till.addEventListener("change", function(){
        DT.textContent= till.value;
        winner= Number(till.value);
        reset();
 })

player1.addEventListener("click", function(){
        if(!gameOver){
        play1++;
        D1.textContent= play1;
        if(play1===winner){
                gameOver= true;
                document.querySelector('#winner1').innerHTML ="Player 1 WINS!!!";
                document.querySelector("#D1").style.color="#6f6cde";        }
}})
player2.addEventListener("click", function(){
        if(!gameOver){
        play2++;
        D2.textContent= play2;}
        if(play2===winner){
                gameOver= true;
                document.querySelector("#D2").style.color="#6f6cde";
                document.querySelector('#winner2').innerHTML ="Player 2 WINS!!!";
}})
res.addEventListener("click", function(){
        play1= 0
        play2= 0
        gameOver= false          
        D1.textContent= play1; 
        D2.textContent= play2;
        document.querySelector("#D2").style.color=""
        document.querySelector("#D1").style.color=""
        document.querySelector('#winner1').innerHTML ="";
        document.querySelector('#winner2').innerHTML ="";
});
function reset(){
        play1= 0
        play2= 0
        gameOver= false
        D1.textContent= play1; 
        D2.textContent= play2;
        document.querySelector("#D2").style.color=""
        document.querySelector("#D1").style.color=""
        document.querySelector('#winner1').innerHTML ="";
        document.querySelector('#winner2').innerHTML ="";
        
}
