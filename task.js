let planet = document.getElementById('planet')
let discover = document.getElementById('discover')

window.addEventListener('scroll',function(){
    let sc= window.scrollY
discover.style.bottom= sc *-6 +'px';
// planet.style.left= sc *8 +'px';
if(sc >31){
    planet.style.left= sc *8 +'px';

}else{
}

if(sc >= 121){
    discover.style.bottom= 121 *-6+'px';
}else{discover.style.bottom= sc *-6 +'px';}

})