// JavaScript Document





let B = 1;


function normal() {	
	B = 1;
	const Textos = document.getElementsByTagName("p");
	
	for (let i = 0; i < Textos.length; i++) {
		Textos[i].style.fontSize = "initial";
		console.log("B es igual a "+ B);
	}
	
	document.getElementById("bLG").classList.remove("defaul");
	document.getElementById("bLEG").classList.remove("defaul");
	if (B == 1) {
		document.getElementById("bLM").classList.add("defaul");
	}
	
}

function large() {
	B = 2;
	const Textos = document.getElementsByTagName("p");
	
	for (let i = 0; i < Textos.length; i++) {
		Textos[i].style.fontSize = "large";
		console.log("B es igual a "+ B);
	}
	
	document.getElementById("bLM").classList.remove("defaul");
	document.getElementById("bLEG").classList.remove("defaul");
	if (B == 2) {
		document.getElementById("bLG").classList.add("defaul");
	}
	
}

function exLarge() {
	B = 3;
	const Textos = document.getElementsByTagName("p");
	
	for (let i = 0; i < Textos.length; i++) {
		Textos[i].style.fontSize = "x-large";
		console.log("B es igual a "+ B);
	}
	
	document.getElementById("bLM").classList.remove("defaul");
	document.getElementById("bLG").classList.remove("defaul");
	if (B == 3) {
		document.getElementById("bLEG").classList.add("defaul");
	}
	
}

			

function colorOscuro() {
	const Textos = document.getElementsByTagName("p");
	for (let i = 0; i < Textos.length; i++) {
		Textos[i].style.color = "ghostwhite";
	}
	const H3 = document.getElementsByTagName("h3");
	for (let i = 0; i < H3.length; i++) {
		H3[i].style.color = "lightgray";
	}
	const Principal = document.getElementById("Main");
	const OL = Principal.getElementsByTagName("ol");
	for (let i = 0; i < OL.length; i++) {
		OL[i].style.color = "ghostwhite";
	}
	const UL = document.getElementsByTagName("ul");
	for (let i = 0; i < UL.length; i++) {
		UL[i].style.color = "ghostwhite";
	}
	
	/*const supers = document.getElementsByTagName("sup");
	for (let i = 0; i < supers.length; i++) {
		supers[i].style.color = "cyan";
	}*/
	
	const Cont = document.getElementById("CONTENIDO");
	const links = Cont.getElementsByTagName("a");
	for (let i = 0; i < links.length; i++) {
		links[i].style.color = "cyan";
	}
	
	document.getElementById("Main").style.backgroundColor="#1C1C1C";
	
	const Separadores = document.getElementsByClassName("separaTemas");
	for (let i = 0; i < Separadores.length; i++) {
		Separadores[i].style.backgroundColor = "#003366";/*#004080*/
	}
	
	document.getElementById("bOscuro").classList.add("defaul");
	document.getElementById("bClaro").classList.remove("defaul");
	
	document.getElementById("Citas").style.backgroundColor="#1C1C1C";
	
	document.getElementById("botonOjo").src="interfaz/icon_ojo-blanco.png";
}

function colorClaro() {
	const Textos = document.getElementsByTagName("p");
	for (let i = 0; i < Textos.length; i++) {
		Textos[i].style.color = null;
	}
	document.getElementById("Main").style.backgroundColor="snow";
	
	const H3 = document.getElementsByTagName("h3");
	for (let i = 0; i < H3.length; i++) {
		H3[i].style.color = null;
	}
	
	const OL = document.getElementsByTagName("ol");
	for (let i = 0; i < OL.length; i++) {
		OL[i].style.color = null;
	}
	const UL = document.getElementsByTagName("ul");
	for (let i = 0; i < UL.length; i++) {
		UL[i].style.color = null;
	}
	/*const supers = document.getElementsByTagName("sup");
	for (let i = 0; i < supers.length; i++) {
		supers[i].style.color = null;
	}*/
	const Cont = document.getElementById("CONTENIDO");
	const links = Cont.getElementsByTagName("a");
	for (let i = 0; i < links.length; i++) {
		links[i].style.color = null;
	}
	
	const Separadores = document.getElementsByClassName("separaTemas");
	for (let i = 0; i < Separadores.length; i++) {
		Separadores[i].style.backgroundColor = null;
	}
	
	document.getElementById("bClaro").classList.add("defaul");
	document.getElementById("bOscuro").classList.remove("defaul");
	
	document.getElementById("Citas").style.backgroundColor=null;
	document.getElementById("botonOjo").src="interfaz/icon_ojo.png";
}



function showControl() {
	document.getElementById("Control").style.top="0px";
	document.getElementById("ojo").style.display="none";
	setTimeout(ocultarControl, 10000);
	//document.getElementById("Contenido").addEventListener("click", cerrarControl);
}
function ocultarControl() {
	document.getElementById("Control").style.top=null;
	setTimeout(showOjo, 400);
}
function showOjo() {
	document.getElementById("ojo").style.display=null;
}
function cerrarControl() {
	document.getElementById("Control").style.height="0px";
	document.getElementById("ojo").style.display="block";
	console.log("cerraste control");
	document.getElementById("Contenido").removeEventListener("click", cerrarControl);
}