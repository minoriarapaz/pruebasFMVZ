// JavaScript Document

var L=1;

/*se necesita una de estas variables para cada galeria*/
let slideIndex = 1; /*la de prueba*/
let slideIndex2 = 1; /*la de prueba*/


function verGaleria() {
			if (L==1) {
				document.getElementById("MG1").style.display="block";
				document.getElementById("MG1").style.opacity="1";
				document.body.style.overflow = "hidden";
				L=2;
				console.log("galeria abierta");
			} else {
				cerrarGaleria();
				/*setTimeout(cerrarGaleria, 100);*/
				document.getElementById("MG1").style.opacity="0";
				document.body.style.overflow = "auto";
				L=1;
				console.log("galeria cerrada");
			}
}

function cerrarGaleria() {
	document.getElementById("MG1").style.display=null;
}

//funciones para galeria 
function moverSlides(N) {
  mostrarSlides(slideIndex += N);
}
function mostrarSlides(N) {
	let w;
	const laGaleria = document.getElementById("esquemas1");
	let slides = laGaleria.getElementsByClassName("diapositiva");
	if (N > slides.length) {slideIndex = 1}
	if (N < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";

	document.getElementById("falsa").style.display="none";
	document.getElementById("contador1").innerHTML = slideIndex;
}

function cambiarImg(I) {
	let G = document.getElementById("esquemas1");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}