
/* variable pour identifier un élément */
var preview = document.getElementById('prev')
var next = document.getElementById('next')

/* Gestionnaires des évènements */
/*
var listenerFunctions = () => {
    prevSlide: ()=>{
        console.log('teste');
    }
    nextSlide: ()=>{
        
    }
    
}*/

/* Fonction qui réalise les abonnements */
 var setupListeners = ()=>{
    preview.addEventListener('click', ()=>{
        let index = slideIndex +1;
        showSlide(index);
    })
    next.addEventListener('click', ()=>{
        let index = slideIndex +1;
        showSlide(index);
    })
    
}

