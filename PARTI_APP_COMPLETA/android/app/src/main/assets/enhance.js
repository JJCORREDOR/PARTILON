
// Extra features injected for app version
function partiVibrate(){
 if(navigator.vibrate){ navigator.vibrate(120); }
}

function partiTimer(seconds=60){
 let el=document.getElementById("parti-timer");
 if(!el){
   el=document.createElement("div");
   el.id="parti-timer";
   el.style.position="fixed";
   el.style.top="10px";
   el.style.right="10px";
   el.style.background="rgba(0,0,0,0.6)";
   el.style.color="white";
   el.style.padding="8px 12px";
   el.style.borderRadius="8px";
   el.style.fontWeight="bold";
   document.body.appendChild(el);
 }
 let t=seconds;
 el.innerText=t+"s";
 const i=setInterval(()=>{
   t--;
   el.innerText=t+"s";
   if(t<=0){ clearInterval(i); alert("⏱ Tiempo terminado"); }
 },1000);
}

document.addEventListener("click",function(e){
 if(e.target && e.target.classList && e.target.classList.contains("btn-new-card")){
   partiVibrate();
   partiTimer(60);
 }
});
