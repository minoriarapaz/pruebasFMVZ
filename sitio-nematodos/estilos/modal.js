// JavaScript Document



const Fuentes = document.getElementsByClassName("Citado");

function contarFuentes() {
	let Zaiss = Fuentes[87].innerHTML;
	alert(Fuentes.length+" ----la fuente num. 87 (ultima) es "+Zaiss);
}
function mostrarBiblio() {
	document.getElementById("Bibliografia").style.display="block";
	document.body.style.overflow = "hidden";
}

function animar() {
		document.getElementById("Bibliografia").style.opacity="1";
		document.getElementById("Citas").style.scale="1";
		console.log("animó");
	}
function develar() {
	mostrarBiblio();
	document.getElementsByClassName("Citado").style.display="block";
	
}

function citar(A, B, C, D, E, F) {
	setTimeout(animar, 100);
	mostrarBiblio();
	Fuentes[A].style.display="block";
	/*document.getElementById("Bibliografia").style.paddingTop="200px";*/
	function restarPadding() {document.getElementById("Bibliografia").style.paddingTop="20px";}
	
	if (B === undefined) {B = null; console.log("no hay 2a cita");} else {Fuentes[B].style.display="block";}
	
	if (C === undefined)
	{C = null; console.log("no hay 3a cita");} else {Fuentes[C].style.display="block";}
	
	if (D === undefined)
	{D = null; console.log("no hay 4a cita");} else {Fuentes[D].style.display="block"; restarPadding();}
	
	if (E === undefined)
	{E = null; console.log("ni 5a cita");} else {Fuentes[E].style.display="block"; restarPadding();}
	
	if (F === undefined)
		{F = null; console.log("ni 6a");} else {Fuentes[F].style.display="block"; restarPadding();}
}



function NoDisplay() {
	document.getElementById("Bibliografia").style.display="none";
}
function salirBiblio() {
	setTimeout(NoDisplay, 300);
	document.getElementById("Citas").style.scale=null;
	document.getElementById("Bibliografia").style.opacity="0";
	document.getElementById("Bibliografia").style.paddingTop="200px";
	document.body.style.overflow = "auto";
	
	const fuentes = document.getElementsByClassName("Citado");
	for (let i = 0; i < fuentes.length; i++) {
		fuentes[i].style.display="none";
	}
	

}
