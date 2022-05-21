
function horaire(){
    var maDate = new Date();
    var h = maDate.toLocaleTimeString();
    const options = {month : "long", day:"2-digit"};
    var jourcomplet = maDate.toLocaleString("fr-Fr",options);
    var fullday = `${jourcomplet} `;
    document.querySelector("#heure").innerHTML =`${fullday} ${h}`;   
    setTimeout(horaire,1000);
}
horaire();

const off = document.querySelector("#off");
const sessionoff = document.querySelector('#sessionoff');
off.addEventListener("click",()=>{
        sessionoff.classList.toggle('sessionoffdisplay');
    
})