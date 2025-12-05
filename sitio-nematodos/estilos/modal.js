// JavaScript Document



const Fuentes = document.getElementsByClassName("Citado");

function mostrarBiblio() {
	document.getElementById("Bibliografia").style.display="block";
	document.body.style.overflow = "hidden";
}

function animar() {
		document.getElementById("Bibliografia").style.opacity="1";
		document.getElementById("Citas").style.scale="1";
		console.log("animó");
	}

function citar(b) {
	setTimeout(animar, 10);
	mostrarBiblio();
	Fuentes[b].style.display="block";
	document.getElementById("Bibliografia").style.paddingTop="200px";
}

function citarEspecial() {
	setTimeout(animar, 10);
	mostrarBiblio();
	Fuentes[5].style.display="block";
	Fuentes[8].style.display="block";
	Fuentes[9].style.display="block";
	Fuentes[10].style.display="block";
	Fuentes[11].style.display="block";
	Fuentes[12].style.display="block";
	document.getElementById("Bibliografia").style.paddingTop="20px";
}

function NoDisplay() {
	document.getElementById("Bibliografia").style.display="none";
}
function salirBiblio() {
	setTimeout(NoDisplay, 300);
	document.getElementById("Citas").style.scale=null;
	document.getElementById("Bibliografia").style.opacity="0";
	document.body.style.overflow = "auto";
	Fuentes[0].style.display="none";
	Fuentes[1].style.display="none";
	Fuentes[2].style.display="none";
	Fuentes[3].style.display="none";
	Fuentes[4].style.display="none";
	Fuentes[5].style.display="none";
	Fuentes[6].style.display="none";
	Fuentes[7].style.display="none";
	Fuentes[8].style.display="none";
	Fuentes[9].style.display="none";
	Fuentes[10].style.display="none";
	Fuentes[11].style.display="none";
	Fuentes[12].style.display="none";
	Fuentes[13].style.display="none";
	Fuentes[14].style.display="none";
	Fuentes[15].style.display="none";
}
