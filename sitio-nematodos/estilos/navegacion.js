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
	console.log("scroll funcionando");
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


window.onscroll = function() {scrollTaxonomia(); scrollEstructura()};


function scrollTaxonomia() {
			var titulo = document.getElementById("Taxonomia");
			var progreso = titulo.offsetTop - 400;
	if (window.scrollY > progreso) {
		document.getElementById("panel1").style.color="transparent";
		document.getElementById("panel1").style.backgroundColor="#3A3A3A";
	} else {
		document.getElementById("panel1").style.color=null;
		document.getElementById("panel1").style.backgroundColor=null;
	}
			
	/*if (window.scrollY > progreso) {
				document.getElementById("cabecera").style.opacity=".5";
			} else {
				console.log("Y de titulo es "+ titulo.offsetTop +" Y del scroll es "+ window.scrollY);
			}*/
}

function scrollEstructura() {
	var titulo = document.getElementById("Estructura");
	var progreso = titulo.offsetTop - 400;
	if (window.scrollY > progreso) {
		document.getElementById("panel2").style.color="transparent";
		document.getElementById("panel2").style.backgroundColor="#3A3A3A";
	} else {
		document.getElementById("panel2").style.color=null;
		document.getElementById("panel2").style.backgroundColor=null;
	}
}