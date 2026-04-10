// JavaScript Document




/*FUNCIONES DE CONTROL DE COMPORTAMIENTO DE LAS BARRAS DE TEMA*/
window.onscroll = function() {scrollPanel2(); scrollPanel3(); scrollPanel4();};

/*const LosSubtemas = document.getElementsByTagName("h3");*/

function scrollPanel2() {
			var titulo = document.getElementById("Planteamiento");
			var progreso = titulo.offsetTop - 1000;
	if (window.scrollY > progreso) {
		document.getElementById("panel1").style.fontSize="2em"
		document.getElementById("panel1").style.height="100px";
	} else {
		document.getElementById("panel1").style.fontSize=null;
		document.getElementById("panel1").style.height=null;
	}
}
function scrollPanel3() {
			var titulo = document.getElementById("CasosClinicos");
			var progreso = titulo.offsetTop - 1300;
	if (window.scrollY > progreso) {
		document.getElementById("panel2").style.fontSize="2em"
		document.getElementById("panel2").style.height="100px";
	} else {
		document.getElementById("panel2").style.fontSize=null;
		document.getElementById("panel2").style.height=null;
	}
}
function scrollPanel4() {
			var titulo = document.getElementById("Ultimo");
			var progreso = titulo.offsetTop - 1500;
	if (window.scrollY > progreso) {
		document.getElementById("panel3").style.fontSize="2em"
		document.getElementById("panel3").style.height="100px";
	} else {
		document.getElementById("panel3").style.fontSize=null;
		document.getElementById("panel3").style.height=null;
	}
}