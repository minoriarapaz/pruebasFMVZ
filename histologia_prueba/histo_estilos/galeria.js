// JavaScript Document


let slideIndex = 1;

// showSlides(slideIndex);

// Next/previous controls
function plusSlides(N) {
  showSlides(slideIndex += N);
}

// Thumbnail image controls BORRASTE LOS THUMBNAIL IONFERIORES
function currentSlide(N) {
  showSlides(slideIndex = N);
}

function showSlides(N) {
 let w;
	const laGaleria1 = document.getElementById("galeria1");
  let slides = laGaleria1.getElementsByClassName("mySlides");
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
	
	document.getElementById("cerebelo-falsa").style.display="none";
}
//para abrir imagenes en grande

function openGaleria1(I) {
	const G = document.getElementById("galeria1");
	const Ima = G.getElementsByTagName("img");
	var direccion = Ima[I].src;
	window.open(direccion);
	/*document.getElementById("demo").innerHTML = 
	'el SRC de la primera imagen es: ' + Ima[I].src;*/
}


//funciones para galeria 2
function moverSlides2(N) {
  mostrarSlides2(slideIndex += N);
}
function mostrarSlides2(N) {
	let w;
	const laGaleria2 = document.getElementById("galeria2");
	let slides = laGaleria2.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("corazon-falsa").style.display="none";
}
function openGaleria2(I) {
	let G = document.getElementById("galeria2");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 3
function moverSlides3(N) {
  mostrarSlides3(slideIndex += N);
}
function mostrarSlides3(N) {
	let w;
	const laGaleria3 = document.getElementById("galeria3");
	let slides = laGaleria3.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("rinon-falsa").style.display="none";
}
function openGaleria3(I) {
	let G = document.getElementById("galeria3");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 4
function moverSlides4(N) {
  mostrarSlides4(slideIndex += N);
}
function mostrarSlides4(N) {
	let w;
	const laGaleria4 = document.getElementById("galeria4");
	let slides = laGaleria4.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("pancreas-falsa").style.display="none";
}
function openGaleria4(I) {
	let G = document.getElementById("galeria4");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 5
function moverSlides5(N) {
  mostrarSlides5(slideIndex += N);
}
function mostrarSlides5(N) {
	let w;
	const laGaleria5 = document.getElementById("galeria5");
	let slides = laGaleria5.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("vagina-falsa").style.display="none";
}
function openGaleria5(I) {
	let G = document.getElementById("galeria5");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 6
function moverSlides6(N) {
  mostrarSlides6(slideIndex += N);
}
function mostrarSlides6(N) {
	let w;
	const laGaleria6 = document.getElementById("galeria6");
	let slides = laGaleria6.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("testiculo-falsa").style.display="none";
}
function openGaleria6(I) {
	let G = document.getElementById("galeria6");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 7
function moverSlides7(N) {
  mostrarSlides7(slideIndex += N);
}
function mostrarSlides7(N) {
	let w;
	const laGaleria7 = document.getElementById("galeria7");
	let slides = laGaleria7.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("tiroides-falsa").style.display="none";
}
function openGaleria7(I) {
	let G = document.getElementById("galeria7");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 8
function moverSlides8(N) {
  mostrarSlides8(slideIndex += N);
}
function mostrarSlides8(N) {
	let w;
	const laGaleria8 = document.getElementById("galeria8");
	let slides = laGaleria8.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("bulbo-falsa").style.display="none";
}
function openGaleria8(I) {
	let G = document.getElementById("galeria8");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 9
function moverSlides9(N) {
  mostrarSlides9(slideIndex += N);
}
function mostrarSlides9(N) {
	let w;
	const laGaleria9 = document.getElementById("galeria9");
	let slides = laGaleria9.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("prostata-falsa").style.display="none";
}
function openGaleria9(I) {
	let G = document.getElementById("galeria9");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 10
function moverSlides10(N) {
  mostrarSlides10(slideIndex += N);
}
function mostrarSlides10(N) {
	let w;
	const laGaleria10 = document.getElementById("galeria10");
	let slides = laGaleria10.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("adrenal-falsa").style.display="none";
}
function openGaleria10(I) {
	let G = document.getElementById("galeria10");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 11
function moverSlides11(N) {
  mostrarSlides11(slideIndex += N);
}
function mostrarSlides11(N) {
	let w;
	const laGaleria11 = document.getElementById("galeria11");
	let slides = laGaleria11.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("bazo-falsa").style.display="none";
}
function openGaleria11(I) {
	let G = document.getElementById("galeria11");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}


//funciones para galeria 12
function moverSlides12(N) {
  mostrarSlides12(slideIndex += N);
}
function mostrarSlides12(N) {
	let w;
	const laGaleria12 = document.getElementById("galeria12");
	let slides = laGaleria12.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("timo-falsa").style.display="none";
}
function openGaleria12(I) {
	let G = document.getElementById("galeria12");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 13
function moverSlides13(N) {
  mostrarSlides13(slideIndex += N);
}
function mostrarSlides13(N) {
	let w;
	const laGaleria13 = document.getElementById("galeria13");
	let slides = laGaleria13.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("lomo-falsa").style.display="none";
}
function openGaleria13(I) {
	let G = document.getElementById("galeria13");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 14
function moverSlides14(N) {
  mostrarSlides14(slideIndex += N);
}
function mostrarSlides14(N) {
	let w;
	const laGaleria14 = document.getElementById("galeria14");
	let slides = laGaleria14.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("pene-falsa").style.display="none";
}
function openGaleria14(I) {
	let G = document.getElementById("galeria14");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 15
function moverSlides15(N) {
  mostrarSlides15(slideIndex += N);
}
function mostrarSlides15(N) {
	let w;
	const laGaleria15 = document.getElementById("galeria15");
	let slides = laGaleria15.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("traquea-falsa").style.display="none";
}
function openGaleria15(I) {
	let G = document.getElementById("galeria15");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 16
function moverSlides16(N) {
  mostrarSlides16(slideIndex += N);
}
function mostrarSlides16(N) {
	let w;
	const laGaleria16 = document.getElementById("galeria16");
	let slides = laGaleria16.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("ojo-falsa").style.display="none";
}
function openGaleria16(I) {
	let G = document.getElementById("galeria16");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 17
function moverSlides17(N) {
  mostrarSlides17(slideIndex += N);
}
function mostrarSlides17(N) {
	let w;
	const laGaleria17 = document.getElementById("galeria17");
	let slides = laGaleria17.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("pierna-falsa").style.display="none";
}
function openGaleria17(I) {
	let G = document.getElementById("galeria17");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}








