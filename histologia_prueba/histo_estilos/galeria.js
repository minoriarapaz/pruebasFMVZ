// JavaScript Document


let slideIndex = 1;
document.getElementById("g1_first").style.display = "block";

// showSlides(slideIndex);

// Next/previous controls
function plusSlides(N) {
  showSlides(slideIndex += N);
}

// Thumbnail image controls
function currentSlide(N) {
  showSlides(slideIndex = N);
}

function showSlides(N) {
 let w;
  let slides = document.getElementsByClassName("mySlides");
 /* let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");*/
  if (N > slides.length) {slideIndex = 1}
  if (N < 1) {slideIndex = slides.length}
  for (w = 0; w < slides.length; w++) {
    slides[w].style.display = "none";
  }
/*  for (w = 0; w < dots.length; w++) {
    dots[w].className = dots[w].className.replace(" active", "");
  }*/
	
  slides[slideIndex-1].style.display = "block";
  /*dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;*/
	
	document.getElementById("g1_first").style.display="none";
}



//PRUEBA PARA EXTENDER IMAGENES (ABRIRLAS HREF)

/*function pruebaAbrir() {
	var direccion = document.getElementById("gal1-3").src;
	//document.getElementById("demo").innerHTML = direccion;
	console.log(direccion);
	window.open(direccion, "_blank");
}*/
//prueba de simplificacion


function openGaleria1(I) {
	const G = document.getElementById("galeria1");
	const Ima = G.getElementsByTagName("img");
	var direccion = Ima[I].src;
	window.open(direccion);
	/*document.getElementById("demo").innerHTML = 
	'el SRC de la primera imagen es: ' + Ima[I].src;*/
}




