// JavaScript Document




/*FUNCIONES DE CONTROL DE COMPORTAMIENTO DE LAS BARRAS DE TEMA*/
window.onscroll = function() {scrollPanel2(); scrollPanel3(); scrollPanel4(); scrollPanel5(); scrollPanel6(); scrollPanel7(); scrollPanel8();};

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
			var titulo = document.getElementById("Antecedentes");
			var progreso = titulo.offsetTop - 1400;
	if (window.scrollY > progreso) {
		document.getElementById("panel2").style.fontSize="2em"
		document.getElementById("panel2").style.height="100px";
	} else {
		document.getElementById("panel2").style.fontSize=null;
		document.getElementById("panel2").style.height=null;
	}
}
function scrollPanel4() {
			var titulo = document.getElementById("Arte");
			var progreso = titulo.offsetTop - 1700;
	if (window.scrollY > progreso) {
		document.getElementById("panel3").style.fontSize="2em"
		document.getElementById("panel3").style.height="100px";
	} else {
		document.getElementById("panel3").style.fontSize=null;
		document.getElementById("panel3").style.height=null;
	}
}
function scrollPanel5() {
			var titulo = document.getElementById("Justificacion");
			var progreso = titulo.offsetTop - 1500;
	if (window.scrollY > progreso) {
		document.getElementById("panel4").style.fontSize="2em"
		document.getElementById("panel4").style.height="100px";
	} else {
		document.getElementById("panel4").style.fontSize=null;
		document.getElementById("panel4").style.height=null;
	}
}

function scrollPanel6() {
			var titulo = document.getElementById("Objetivo");
			var progreso = titulo.offsetTop - 1500;
	if (window.scrollY > progreso) {
		document.getElementById("panel5").style.fontSize="2em"
		document.getElementById("panel5").style.height="100px";
	} else {
		document.getElementById("panel5").style.fontSize=null;
		document.getElementById("panel5").style.height=null;
	}
}

function scrollPanel7() {
			var titulo = document.getElementById("Metodologia");
			var progreso = titulo.offsetTop - 1500;
	if (window.scrollY > progreso) {
		document.getElementById("panel6").style.fontSize="2em"
		document.getElementById("panel6").style.height="100px";
	} else {
		document.getElementById("panel6").style.fontSize=null;
		document.getElementById("panel6").style.height=null;
	}
}

function scrollPanel8() {
			var titulo = document.getElementById("CasosClinicos");
			var progreso = titulo.offsetTop - 1500;
	if (window.scrollY > progreso) {
		document.getElementById("panel7").style.fontSize="2em"
		document.getElementById("panel7").style.height="100px";
	} else {
		document.getElementById("panel7").style.fontSize=null;
		document.getElementById("panel7").style.height=null;
	}
}