// JavaScript Document

var L=1;

/*ANTES NECESITABAS una de estas variables para cada galeria*/
let slideIndex = 1; /*la de prueba*/


const LasGalerias = document.getElementsByClassName("galeria");
function revisar() {let cantidad = LasGalerias.length; console.log("la cantidad de Galerias es "+ cantidad);}

function verCajita(a) {
	abrirCaja();
	LasGalerias[a].style.display="block";
}

function cerrarGaleria() {
	document.getElementById("Caja").style.display=null;
}

function abrirCaja() {
	if (L==1) {
				document.getElementById("Caja").style.display="block";
				document.getElementById("Caja").style.opacity="1";
				document.body.style.overflow = "hidden";
				L=2;
				console.log("caja abierta");
			} else {
				cerrarCaja();
				document.getElementById("Caja").style.opacity="0";
				document.body.style.overflow = "auto";
				L=1;
				
				LasGalerias[0].style.display=null;
				LasGalerias[1].style.display=null;
			}
}
function cerrarCaja() {
	console.log("caja cerrada");
	document.getElementById("Caja").style.display=null;
}
//funciones para galeria 



function moverSlides(N) {
  mostrarSlides(slideIndex += N);
	
}
function mostrarSlides(Q) {
	let w;
	let laGaleria = document.getElementById("cajita1");
	const slides = laGaleria.getElementsByClassName("diapositiva");
	
	
	if (Q > slides.length) {slideIndex = 1}
	if (Q < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
	
	document.getElementById("falsa1").style.display="none";
	document.getElementById("contador1").innerHTML = slideIndex;
}

function agrandarImg(I,i) {
	const cajitas = document.getElementsByClassName("galeria");
	let laGaleria = cajitas[i];
	
	let Ima = laGaleria.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

function moverTODAS(N,g) {
	mostrarTODAS(slideIndex += N, g);
}
function mostrarTODAS(Q,g) {
	let w;
	
	const misGalerias = document.getElementsByClassName("galeria");
	let laGaleria = misGalerias[g];
	const slides = laGaleria.getElementsByClassName("diapositiva");
	
	
	if (Q > slides.length) {slideIndex = 1}
	if (Q < 1) {slideIndex = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
	
	misGalerias[g].querySelector(".diapoFalsa").style.display="none";
	misGalerias[g].querySelector(".numbertext").innerHTML = slideIndex;
}