// JavaScript Document

function version() {
	alert("versión 2.2026");
}

function Despliegue() {
	document.getElementById("subIndice").classList.toggle("indiceVisible");
	document.getElementById("Indice3").classList.toggle("IndexActivo");
}
/*para cambiar la Hamburguesa a X*/
function Equis(x) {
  x.classList.toggle("equis");
}

function activarScroll() {
	if (L==1) {
		document.body.style.overflow = "auto";
		console.log("scroll ACTIVADO");
	} else {
		document.body.style.overflow = "hidden";
		console.log("scroll Hidden");
	}
	
}

var L = 1; /*es redundante porque de NINGUNA funcion reasigna este valor. SIEMPRE PERMANECE EN -1-*/

function DeclaraciondVariableL() {
	console.log("Variable L /uno al inicio/ es "+L);
}

let Abierto = 1;
function verIndice() {
	if (Abierto==1) {
		document.getElementById("Indice").style.left="0px";
		Abierto=2;
		document.body.style.overflow = "hidden";
		console.log("indice abierto. Variable Abierto es "+Abierto);
		document.getElementById("hamburguesa").classList.toggle("equis");
		
		/*oculta btn Ojo y/o cierra los controles d lectura
		document.getElementById("ojo").style.visibility="hidden";
		cerrarControl();*/
		/*para cerrar este indice dando clic afuera
		document.getElementById("Indice").addEventListener("click", verIndice2);*/
	} else {
		/*setTimeout(cerrarIndice2, 300);*/
		document.getElementById("Indice").style.left="-300px";
		/*document.body.style.overflow = "auto"; (no necesario ya que la llamas abajo)*/
		Abierto=1;
		document.body.style.overflow = "auto";
		/*document.getElementById("ojo").style.visibility="visible";*/
		console.log("indice cerrado. Variable Abierto es "+Abierto);
		
		document.getElementById("hamburguesa").classList.toggle("equis");
		
	}
}
/*las siguientes 2 funciones estaban en modal.js. Las colocaste aqui para usar la variable Abierto (o la funcion misma verIndice*/
function NoDisplay() {
	document.getElementById("Bibliografia").style.display="none";
}
function salirBiblio() {
	setTimeout(NoDisplay, 300);
	document.getElementById("Citas").style.scale=null;
	document.getElementById("Bibliografia").style.opacity="0";
	document.getElementById("Bibliografia").style.paddingTop="200px";
	
	Abierto=1;
	document.body.style.overflow = "auto";
	/*OCULTARÁ EL INDICE SI ESTÁ ABIERTOP*/
	document.getElementById("Indice").style.left="-300px";
	document.getElementById("hamburguesa").classList.toggle("equis");
	
	const fuentes = document.getElementsByClassName("Citado");
	for (let i = 0; i < fuentes.length; i++) {
		fuentes[i].style.display="none";
	}
}
/*FIN FUNCIONES PRESTADAS*/
/*las siguientes F estaban en galeria.js*/
function animarIframe() {
	document.getElementById("Cargador").style.scale="1";
	document.getElementById("Cargador").style.opacity="1";
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
	if (C==15) {
		document.getElementById("Cargador").src="interactivos/legales.html";
	}
}
function animarCaja() {
	document.getElementById("Caja").style.opacity="1";
}

function abrirCaja() {
	if (L==1) {
				document.getElementById("Caja").style.display="block";
				setTimeout(animarCaja, 100);
				document.body.style.overflow = "hidden";
				document.getElementById("botonX").style.display="block";
				L=2;
				console.log("caja abierta y let L es dos? "+L);
			} else {
				cerrarCaja();
				document.getElementById("Caja").style.opacity=null;
				document.body.style.overflow = "auto";
				L=1;
				console.log("La let L debería ser uno "+L);
			}
	if (Abierto==2) {
		document.getElementById("Indice").style.left="-300px";
		Abierto=1;
		console.log("indice cerrado. Abierto debiera ser uno "+Abierto);
		document.getElementById("hamburguesa").classList.toggle("equis");
	}
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
/*FIN FUNCIONES IMPORTADAS DE GALERIA.JS*/



function forzarIndice() {
	document.getElementById("Indice").style.left="-300px";
}



/*FUNCIONES INDICE Y NAVEGACION*/
function irIntroduccion() {
	window.scroll(
		{top: /*0*/(document.getElementById("Introduccion").offsetTop /*- compensacion*/), left: 0, }
	);
	document.getElementById("Indice").style.left="-300px";
	Abierto=1;
	document.body.style.overflow = "auto";
	console.log("indice cerrado. Variable Abierto es "+Abierto);
	document.getElementById("hamburguesa").classList.remove("equis");
}

function irTaxonomia() {
	window.scroll(
		{top: /*768*/(document.getElementById("Taxonomia").offsetTop /*- compensacion*/), left: 0, }
	);
	document.getElementById("Indice").style.left="-300px";
	Abierto=1;
	document.body.style.overflow = "auto";
	console.log("indice cerrado. Variable Abierto es "+Abierto);
	document.getElementById("hamburguesa").classList.remove("equis");
}

function irEstructura() {
	window.scroll(
		{top: (document.getElementById("Estructura").offsetTop)/**/, left: 0, }
	);
	document.getElementById("Indice").style.left="-300px";
	Abierto=1;
	document.body.style.overflow = "auto";
	console.log("indice cerrado. Variable Abierto es "+Abierto);
	document.getElementById("hamburguesa").classList.remove("equis");
}

function irHistoria() {
	window.scroll(
		{top: (document.getElementById("Historia").offsetTop)/*3411*/, left: 0, }
	);
	document.getElementById("Indice").style.left="-300px";
	Abierto=1;
	document.body.style.overflow = "auto";
	console.log("indice cerrado. Variable Abierto es "+Abierto);
	document.getElementById("hamburguesa").classList.remove("equis");
}

function irImpacto() {
	window.scroll(
		{top: (document.getElementById("Impacto").offsetTop)/*3411*/, left: 0, }
	);
	document.getElementById("Indice").style.left="-300px";
	Abierto=1;
	document.body.style.overflow = "auto";
	console.log("indice cerrado. Variable Abierto es "+Abierto);
	document.getElementById("hamburguesa").classList.remove("equis");
}

/*FUNCIONES PARA ABRIR LA BIBLIO Y CERRAR EL INDICE*/
function showBiblio() {
	document.getElementById("Bibliografia").style.display="block";
	/*document.body.style.overflow = "hidden";*/
}

function animarB() {
		document.getElementById("Bibliografia").style.opacity="1";
		document.getElementById("Citas").style.scale="1";
		console.log("animó");
	}
function irBiblio() {
	setTimeout(animarB, 100);
	showBiblio();
	
	const citas = document.getElementsByClassName("Citado");
	for (let c = 0; c < citas.length; c++) {
		citas[c].style.display="block";
	}
	
	Abierto=1;
	document.getElementById("Indice").style.left="-300px";
	document.body.style.overflow = "auto";
	console.log("indice cerrado. Variable Abierto es "+Abierto);
	document.getElementById("hamburguesa").classList.remove("equis");

}
/*FUNCIONES PARA ABRIR LA BIBLIO Y CERRAR EL INDICE FIN*/


const SecSubtemas = document.getElementsByClassName("subtema");

function irSubtema(e) {
	var Tema = document.getElementById("Estructura");
	var posicionSub = Tema.offsetTop + SecSubtemas[e].offsetTop;
	window.scroll(
		{top: (posicionSub-200), left: 0, }
	);
	document.getElementById("Indice").style.left="-300px";
	Abierto=1;
	document.body.style.overflow = "auto";
	console.log("indice cerrado. Variable Abierto es "+Abierto);
	document.getElementById("hamburguesa").classList.remove("equis");
}
/*FUNCIONES INDICE Y NAVEGACION ---- f i n ---*/





/*FUNCIONES DE CONTROL DE COMPORTAMIENTO DE LAS BARRAS DE TEMA*/
window.onscroll = function() {scrollTaxonomia(); scrollEstructura(); scrollSubtemas(); scrollHistoria(); scrollImpacto();};

const LosSubtemas = document.getElementsByTagName("h3");

function scrollTaxonomia() {
			var titulo = document.getElementById("Taxonomia");
			var progreso = titulo.offsetTop - 500;
	if (window.scrollY > progreso) {
		document.getElementById("panel1").style.color="transparent";
		document.getElementById("panel1").style.backgroundColor="#3A3A3A";
	} else {
		document.getElementById("panel1").style.color=null;
		document.getElementById("panel1").style.backgroundColor=null;
	}
}

function scrollEstructura() {
	var titulo = document.getElementById("Estructura");
	var progreso = titulo.offsetTop - 700;
	if (window.scrollY > progreso) {
		document.getElementById("panel2").style.color="transparent";
		document.getElementById("panel2").style.backgroundColor="#3A3A3A";
	} else {
		document.getElementById("panel2").style.color=null;
		document.getElementById("panel2").style.backgroundColor=null;
	}
}

function scrollSubtemas() {
	var YTema = document.getElementById("Estructura").offsetTop;
	var YSub1 = SecSubtemas[0].offsetTop;
	var YSub2 = SecSubtemas[1].offsetTop;
	var Ysub3 = SecSubtemas[2].offsetTop;
	var Ysub4 = SecSubtemas[3].offsetTop;
	var Ysub5 = SecSubtemas[4].offsetTop;
	var Ysub6 = SecSubtemas[5].offsetTop;
	
	var Ysuma1 = YTema + YSub1;
	var Ysuma2 = YTema + YSub2 - 250;
	var Ysuma3 = YTema + Ysub3 - 250;
	var Ysuma4 = YTema + Ysub4 - 250;
	var Ysuma5 = YTema + Ysub5 - 250;
	var Ysuma6 = YTema + Ysub6 - 250;
	
	
	if (window.scrollY > Ysuma1) {
		document.getElementById("nombreSubtema").innerHTML = LosSubtemas[0].innerHTML;
	}
	if (window.scrollY > Ysuma2) {
		document.getElementById("nombreSubtema").innerHTML = LosSubtemas[1].innerHTML;
	}
	if (window.scrollY > Ysuma3) {
		document.getElementById("nombreSubtema").innerHTML = LosSubtemas[2].innerHTML;
	}
	if (window.scrollY > Ysuma4) {
		document.getElementById("nombreSubtema").innerHTML = LosSubtemas[3].innerHTML;
	}
	if (window.scrollY > Ysuma5) {
		document.getElementById("nombreSubtema").innerHTML = LosSubtemas[4].innerHTML;
	}
	if (window.scrollY > Ysuma6) {
		document.getElementById("nombreSubtema").innerHTML = LosSubtemas[5].innerHTML;
	}
	
	
	else if (window.scrollY < YTema) {
		document.getElementById("nombreSubtema").innerHTML = LosSubtemas[0].innerHTML;
	}
	

}

function scrollHistoria() {
			var titulo = document.getElementById("Historia");
			var progreso = titulo.offsetTop - 500;
	if (window.scrollY > progreso) {
		document.getElementById("panel3").style.color="transparent";
		document.getElementById("panel3").style.backgroundColor="#3A3A3A";
	} else {
		document.getElementById("panel3").style.color=null;
		document.getElementById("panel3").style.backgroundColor=null;
	}
}
function scrollImpacto() {
			var titulo = document.getElementById("Impacto");
			var progreso = titulo.offsetTop - 500;
	if (window.scrollY > progreso) {
		document.getElementById("panel3").style.color="transparent";
		document.getElementById("panel3").style.backgroundColor="#3A3A3A";
	} else {
		document.getElementById("panel3").style.color=null;
		document.getElementById("panel3").style.backgroundColor=null;
	}
}

/*     ABRIR   C O M E N T A R I O S */

const Comentarios = document.getElementsByClassName("parrafoResaltado");
const Gusanos = document.getElementsByClassName("gusano");

function verComent(c) {
	if (c==0) {
		Comentarios[c].style.animationPlayState = "running";
		Comentarios[c].style.display="block";
		Gusanos[c].style.display="none";
		
		Comentarios[1].style.display="none";
		Gusanos[1].style.display="block";
		
		Comentarios[2].style.display="none";
		Gusanos[2].style.display="block";
	}
	if (c==1) {
		Comentarios[c].style.animationPlayState = "running";
		Comentarios[c].style.display="block";
		Gusanos[c].style.display="none";
		
		Comentarios[0].style.display="none";
		Gusanos[0].style.display="block";
		
		Comentarios[2].style.display="none";
		Gusanos[2].style.display="block";
	}
	if (c==2) {
		Comentarios[c].style.animationPlayState = "running";
		Comentarios[c].style.display="block";
		Gusanos[c].style.display="none";
		
		Comentarios[0].style.display="none";
		Gusanos[0].style.display="block";
		
		Comentarios[1].style.display="none";
		Gusanos[1].style.display="block";
	}
	
	/*Comentarios[c].style.animationPlayState = "running";
	Comentarios[c].style.display="block";
	Gusanos[c].style.display="none";*/
}




/*funcion de prueba*/
function YdeSubtema1() {
	var Y1 = document.getElementById("Subtema1").offsetTop;
	var YE = document.getElementById("Estructura").offsetTop;
	var YEresta = YE-700;
	alert("Y de Generalidades es = a "+Y1 +" Y de TEMA Estructura es = " + YE + " SCROLL = "+window.scrollY);
}