let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let btns=document.querySelectorAll(".btn");
let btnClasses=["one","two","three","four"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    
    if(started==false){
         started=true;
        }
        

     console.log(level);
     h2.innerText="Get Ready to Play "  
   setTimeout(levelup, 1000);
   
});
function levelup(){
    // level++;
    // console.log(level);
    userSeq=[];
     h2.innerText=`level${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randClass=btnClasses[randIdx];
    let randBtn=document.querySelector(`.${randClass}`)
    gameSeq.push(randClass);

    buttonFlash(randBtn);
}


function buttonFlash(btn){
    
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 200);

}


     for(btn of btns){
    
    btn.addEventListener("click",btnPress)
}
    
   

function btnPress(){
    let btn=this;
    buttonFlash(btn);
    userSeq.push(btn.classList[1]);
    match(userSeq.length-1);
    
}


function match(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(() => {
                levelup();
            }, 1000);
        }
    }
    else h2.innerText="game over";
}


