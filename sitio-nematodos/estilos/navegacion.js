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
function irTaxonomia() {
	window.scroll(
		{top: (document.getElementById("Taxonomia").offsetTop /*- compensacion*/), left: 0, }
	);
	/*verIndice2();*/
}
function irIntroduccion() {
	window.scroll(
		{top: (document.getElementById("Introduccion").offsetTop /*- compensacion*/), left: 0, }
	);
	/*verIndice2();*/
}
function irEstructura() {
	window.scroll(
		{top: (document.getElementById("Estructura").offsetTop /*- compensacion*/), left: 0, }
	);
	/*verIndice2();*/
}