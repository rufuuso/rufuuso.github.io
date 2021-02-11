
var colors= generatenewrandom(6)
var square= document.querySelectorAll(".square");
var pickedColor = colors[picking(6)]
var theColor= document.querySelector("#theColor")
var done= document.querySelector("#done")
var title= document.querySelector("h1")
var BNC= document.querySelector(".newC")
var easyBtn= document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");
theColor.textContent= " "+pickedColor;


easyBtn.addEventListener( "click" , function(){ 
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors= generatenewrandom(3)
    pickedColor = colors[picking(3)]
    theColor.textContent= " "+pickedColor;
    title.style.backgroundColor= "";
    done.textContent=""
    for(i=0; i<square.length; i++){
        if(colors[i]){
            square[i].style.backgroundColor= colors[i];
        }
        else (square[i].style.display= "none")
    }
});
hardBtn.addEventListener( "click" , function(){ 
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors= generatenewrandom(6)
    pickedColor = colors[picking(6)]
    theColor.textContent= " "+pickedColor;
    done.textContent=""
    title.style.backgroundColor= "";
    for(i=0; i<square.length; i++){
        square[i].style.backgroundColor= colors[i];
        square[i].style.display= "block"
    }


});



BNC.addEventListener("click", function resert(){
    
    colors= generatenewrandom(colors.length)
    pickedColor = colors[picking(colors.length)]
    theColor.textContent= " "+pickedColor;
    done.textContent=""
    for (var i = 0; i < square.length; i++){
        square[i].style.backgroundColor= colors[i];
    }
    title.style.backgroundColor= ""; 
})



for (var i = 0; i < square.length; i++){
    square[i].style.backgroundColor= colors[i]; 
    
    square[i].addEventListener("click", function(){
        var clickedColor=this.style.backgroundColor
        if(clickedColor===pickedColor){
           
            done.textContent= "well done!"
            change(pickedColor);
            
            
    
        }
        else(done.textContent= "try again, you can do it!!",
            this.style.backgroundColor= "#232323"
        )
    });
}
function change(colors){
    title.style.backgroundColor= pickedColor;
    for(i=0; i<square.length; i++){
    square[i].style.backgroundColor= colors;}

}
function generatenewrandom(num){
    var arr=[]
    for(i=0; i<num; i++){
        arr.push(random());
    }
    return arr;
}

function picking(num){
    var p= Math.floor( Math.random()*num)
    return p;

}

function random(){
 var r=   Math.floor( Math.random()*256)
 var g=   Math.floor( Math.random()*256)
 var b=   Math.floor( Math.random()*256)
   return "rgb("+r+", "+g+", "+b + ")" ;

}

































