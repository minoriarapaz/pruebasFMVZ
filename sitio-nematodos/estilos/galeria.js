// JavaScript Document



/*ANTES NECESITABAS una de estas variables para cada galeria*/
let slideIndex = 1; /*la de prueba*/


const LasGalerias = document.getElementsByClassName("galeria");
function revisar() {let cantidad = LasGalerias.length; console.log("la cantidad de Galerias es "+ cantidad);}




function cerrarGaleria() {
	document.getElementById("Caja").style.display=null;
}



//funciones para galeria 



function agrandarImg(I,i) {
	const cajitas = document.getElementsByClassName("galeria");
	let laGaleria = cajitas[i];
	
	let Ima = laGaleria.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

function agrandarNueva(A) {
	const cajita = document.getElementById("cajita1");
	
	let figura = cajita.getElementsByTagName("img");
	let ruta = figura[A].src;
	window.open(ruta);
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
	
	/*misGalerias[g].querySelector(".diapoFalsa").style.display="none";*/
}

function abrircita() {
	document.getElementById("cita6").style.display="block";
}
function cerrarcita() {
	document.getElementById("cita6").style.display="none";
}