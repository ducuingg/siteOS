
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


function fermeture(){
    let croix = document.querySelectorAll('.croix');
    let form = document.querySelector('form');
    let finssession = document.querySelector('#finsession');
        for(let i = 0; i<croix.length;i++){
            croix[i].addEventListener('click',()=>{
                if(i == 0){
                    form.style.display="none";
                    form.style.zIndex="0";
                }
                if(i == 1){
                    finssession.style.display = 'none';
                    finssession.style.zIndex ='0';
            }
        })    
    }
        
}
fermeture();

function ouverture(){
    let ouvreFenetre = document.querySelectorAll('.ouvreFenetre');
    for(let i=0;i<ouvreFenetre.length;i++){
        ouvreFenetre[i].addEventListener('click',()=>{
            if(i == 2){
                let form = document.querySelector('form');
                form.style.display="block";
                form.style.zIndex="1";
            }
            // if(i == 1){
            //     let form = document.querySelector('form');
            //     form.style.display="block";
            // }
        })
    }
}
ouverture();

function ecranFinSession(){
    let quitter = document.querySelector('.leave');
    let finssession = document.querySelector('#finsession');
    quitter.addEventListener('click',()=>{
        finssession.style.display = 'block';
        finssession.style.zIndex ='1';
        setTimeout(finSession,5000);
    })
}
ecranFinSession();

function finSession(){
        document.location.href='https://www.google.fr';
} 

function toast(){
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample);
    if (toastTrigger) {
      toastTrigger.addEventListener('click', () => {
        toast.show();
      })
    }
    toast.show();
}
toast();
