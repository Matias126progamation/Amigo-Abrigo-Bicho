
function mostrar(id){
document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

function next(n){
let steps = document.querySelectorAll(".step");   
steps.forEach(s => s.classList.remove("active"));    
if (steps[n]) {
 steps[n].classList.add("active");
}
}

function buscar(valor){
let cards=document.querySelectorAll(".card");
cards.forEach(c=>{
c.style.display=c.innerText.toLowerCase().includes(valor.toLowerCase())?"block":"none";
});
}
