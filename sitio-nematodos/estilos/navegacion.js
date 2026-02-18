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

var Abierto = 1;
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
		/*quita el evento click del Modal alrededor del indice
		document.getElementById("Indice").removeEventListener("click", verIndice2);*/
		
		document.getElementById("hamburguesa").classList.toggle("equis");
		
	}
}

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
		document.getElementById("nombreSubtema").innerHTML= LosSubtemas[0].innerHTML;
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
	
	Comentarios[c].style.animationPlayState = "running";
	Comentarios[c].style.display="block";
	Gusanos[c].style.display="none";
	/*document.getElementById("myDIV").style.animationPlayState = "running";*/
}




/*funcion de prueba*/
function YdeSubtema1() {
	var Y1 = document.getElementById("Subtema1").offsetTop;
	var YE = document.getElementById("Estructura").offsetTop;
	var YEresta = YE-700;
	alert("Y de Generalidades es = a "+Y1 +" Y de TEMA Estructura es = " + YE + " SCROLL = "+window.scrollY);
}