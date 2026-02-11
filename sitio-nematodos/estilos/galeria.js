// JavaScript Document

var L=1;

/*ANTES NECESITABAS una de estas variables para cada galeria*/
let slideIndex = 1; /*la de prueba*/


const LasGalerias = document.getElementsByClassName("galeria");
function revisar() {let cantidad = LasGalerias.length; console.log("la cantidad de Galerias es "+ cantidad);}

function verCajita(a) {
	abrirCaja();
	/*LasGalerias[a].style.display="block";*/
}
function loadCajita(C) {
	abrirCaja();
	setTimeout(animarIframe, 100);
	
	if (C==1) {
		document.getElementById("Cargador").src="interactivos/galeria1.html";
	}
	if (C==2) {
		document.getElementById("Cargador").src="interactivos/galeria2.html";
	}
	if (C==3) {
		document.getElementById("Cargador").src="interactivos/galeria3.html";
	}
	if (C==4) {
		document.getElementById("Cargador").src="interactivos/galeria4.html";
	}
	if (C==5) {
		document.getElementById("Cargador").src="interactivos/galeria5.html";
	}
	if (C==6) {
		document.getElementById("Cargador").src="interactivos/galeria6.html";
	}
	if (C==7) {
		document.getElementById("Cargador").src="interactivos/galeria7.html";
	}
	if (C==8) {
		document.getElementById("Cargador").src="interactivos/galeria8.html";
	}
	if (C==9) {
		document.getElementById("Cargador").src="interactivos/galeria9.html";
	}
	if (C==10) {
		document.getElementById("Cargador").src="interactivos/galeria10.html";
	}
	if (C==11) {
		document.getElementById("Cargador").src="interactivos/galeria11.html";
	}
	if (C==12) {
		document.getElementById("Cargador").src="interactivos/galeria12.html";
	}
	if (C==13) {
		document.getElementById("Cargador").src="interactivos/galeria13.html";
	}
	if (C==14) {
		document.getElementById("Cargador").src="biblio-redux.html";
		document.getElementById("Indice").style.left="-300px";
		document.body.style.overflow = "auto";
		document.getElementById("hamburguesa").classList.remove("equis");
	}
}
function animarIframe() {
	document.getElementById("Cargador").style.scale="1";
	document.getElementById("Cargador").style.opacity="1";
}

function cerrarGaleria() {
	document.getElementById("Caja").style.display=null;
}

function abrirCaja() {
	if (L==1) {
				document.getElementById("Caja").style.display="block";
				setTimeout(animarCaja, 100);
				document.body.style.overflow = "hidden";
				document.getElementById("botonX").style.display="block";
				L=2;
				console.log("caja abierta");
			} else {
				cerrarCaja();
				document.getElementById("Caja").style.opacity=null;
				document.body.style.overflow = "auto";
				L=1;
			}
}
function animarCaja() {
	document.getElementById("Caja").style.opacity="1";
}
function cerrarCaja() {
	console.log("caja cerrada");
	setTimeout(ocultarCaja, 500);
	
	document.getElementById("Cargador").style.scale=null;
	document.getElementById("Cargador").style.opacity=null;
	document.getElementById("botonX").style.display=null;
}

function ocultarCaja() {
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