// JavaScript Document


/*FUNCIONES DE CONTROL DE COMPORTAMIENTO DE LAS BARRAS DE TEMA*/
window.onscroll = function() {scrollPanel2();};

/*const LosSubtemas = document.getElementsByTagName("h3");*/

function scrollPanel2() {
			var titulo = document.getElementById("CasosClinicos");
			var progreso = titulo.offsetTop - 1000;
	if (window.scrollY > progreso) {
		document.getElementById("panel1").style.fontSize="2em"
		document.getElementById("panel1").style.height="100px";
	} else {
		document.getElementById("panel1").style.fontSize=null;
		document.getElementById("panel1").style.height=null;
	}
}