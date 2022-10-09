
// variable pour la position des éléments // 
var slideIndex = 0;
//variable pour identifier mes slides //
var slides = document.querySelectorAll(".slide");
// variable pour rendre le temps dynamique le setInterval()//
const Time = 3000; 

/* function caché du slide */
var hideSlide = () =>{
 var slides = document.querySelectorAll(".slide")
 displayDot(slides) 
 for (let index = 1; index < slides.length; index++) {
    const slide = slides[index];
    slide.style.display ="none";
 }
}

/* function pour initier le slider */
var initSlider = ()=>{
    hideSlide()
}

// function pour afficher les points //
var displayDot = (sliders) =>{
 for (let index = 0; index < sliders.length; index++) {
    const slide = sliders[index];
    var span = document.createElement('span');
    span.onclick = () => showSlide(index)
    span.className = "dot";  // ou span.setAttribute("class", "dot")

    if(index == 0){
      span.classList.add("active")
    }
    document.getElementById("dots").appendChild(span);
 }
}

// function pour afficher le bon slide en lui fournissant un parametre //
// modulo (%) permet de trouver les bonnes indices //

var showSlide = (index) =>{
   if(typeof(index) !== "number"){
      return 
   }
   let lastSlideIndex = slideIndex

   index %= slides.length
   // conditions//
   /* nous pouvons simplifier avec les expressions ternaire 
    if (index < 0) {
      index += 8; // ou Math.abs(-1) : transforme un nombre négatif en nombre positif //
   }
   */
   index < 0 ? index += 8 : null // expression ternaire //
   slideIndex = index

slideIndex = index % slides.length
  // Cacher l'ancien slide //
slides[lastSlideIndex].style.display = "none"
// Affichage du slide correspondant à l'indice reçu en paramètre //
slides[slideIndex].style.display = "block";

// appel de la function //
setActiveSlide(lastSlideIndex, slideIndex)
   
}

// function pour animer le slider automatiquement //
var changeSlide = () =>{
   var index = slideIndex +1;
   showSlide(index)
}

/* variable pour stocker ma méthode */
var intervalID = setInterval(changeSlide,Time)

//function pour animer les dots //
var setActiveSlide = (lastIndex, currentIndex)=>{
// variabe pour récuperer les dots //
var spans = document.querySelectorAll(".dots span")
spans[lastIndex] ? spans[lastIndex].classList.remove("active") : null
spans[currentIndex] ? spans[currentIndex].classList.add("active") : null

}
