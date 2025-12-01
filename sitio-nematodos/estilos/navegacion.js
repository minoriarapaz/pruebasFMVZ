// JavaScript Document


function Despliegue() {
	document.getElementById("subIndice").classList.toggle("indiceVisible");
	document.getElementById("Indice3").classList.toggle("IndexActivo");
}
/*para cambiar la Hamburguesa a X*/
function Equis(x) {
  x.classList.toggle("equis");
}

function activarScroll() {
	document.body.style.overflow = "auto";
}

var L = 1;
function verIndice() {
	if (L==1) {
		document.getElementById("Indice").style.left="0px";
		document.body.style.overflow = "hidden";
		L=2;
		console.log("indice abierto");
		
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
		activarScroll();
		L=1;
		/*document.getElementById("ojo").style.visibility="visible";*/
		console.log("nuevo indice cerrado");
		/*quita el evento click del Modal alrededor del indice
		document.getElementById("Indice").removeEventListener("click", verIndice2);*/
		
		document.getElementById("hamburguesa").classList.toggle("equis");
		
	}
}


/*FUNCIONES INDICE Y NAVEGACION*/
function irIntroduccion() {
	window.scroll(
		{top: /*0*/(document.getElementById("Introduccion").offsetTop /*- compensacion*/), left: 0, }
	);
	/*verIndice2();*/
	console.log(document.getElementById("Taxonomia").offsetTop);
}

function irTaxonomia() {
	window.scroll(
		{top: /*768*/(document.getElementById("Taxonomia").offsetTop /*- compensacion*/), left: 0, }
	);
	/*verIndice2();*/
	
}

function irEstructura() {
	window.scroll(
		{top: (document.getElementById("Estructura").offsetTop)/*3411*/, left: 0, }
	);
	/*verIndice2();*/
}

const SecSubtemas = document.getElementsByClassName("subtema");

function irSubtema(e) {
	var Tema = document.getElementById("Estructura");
	var posicionSub = Tema.offsetTop + SecSubtemas[e].offsetTop;
	window.scroll(
		{top: (posicionSub-200), left: 0, }
	);
	console.log(posicionSub);
	
	/*var posicionSub2 = Tema.offsetTop + SecSubtemas[1].offsetTop;*/
}
/*FUNCIONES INDICE Y NAVEGACION ---- f i n ---*/





/*FUNCIONES DE CONTROL DE COMPORTAMIENTO DE LAS BARRAS DE TEMA*/
window.onscroll = function() {scrollTaxonomia(); scrollEstructura(); scrollSubtemas();};

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
		document.getElementById("panel2").style.color="blue";
		document.getElementById("panel2").style.backgroundColor="#3A3A3A";
	} else {
		document.getElementById("panel2").style.color=null;
		document.getElementById("panel2").style.backgroundColor=null;
	}
}

function scrollSubtemas() {
	var YTema = document.getElementById("Estructura").offsetTop;
	var YSub1 = document.getElementById("Subtema1").offsetTop;
	var YSub2 = document.getElementById("Subtema2").offsetTop;
	var Ysub3 = SecSubtemas[2].offsetTop;
	
	var Ysuma1 = YTema + YSub1;
	var Ysuma2 = YTema + YSub2 - 250;
	var Ysuma3 = YTema + Ysub3 -250;
	
	
	if (window.scrollY > Ysuma1) {
		document.getElementById("nombreSubtema").innerHTML = LosSubtemas[0].innerHTML;
	}
	if (window.scrollY > Ysuma2) {
		document.getElementById("nombreSubtema").innerHTML = LosSubtemas[1].innerHTML;
	}
	if (window.scrollY > Ysuma3) {
		document.getElementById("nombreSubtema").innerHTML = LosSubtemas[2].innerHTML;
	}
	
	
	else if (window.scrollY < YTema) {
		document.getElementById("nombreSubtema").innerHTML=null;
	}
	

}


function YdeSubtema1() {
	var Y1 = document.getElementById("Subtema1").offsetTop;
	var YE = document.getElementById("Estructura").offsetTop;
	var YEresta = YE-700;
	alert("Y de Generalidades es = a "+Y1 +" Y de TEMA Estructura es = " + YE + " SCROLL = "+window.scrollY);
}