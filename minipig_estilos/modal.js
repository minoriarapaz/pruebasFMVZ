// JavaScript Document


var i=1 /*esta VAR es usada en navegacion.JS*/
var Scroll=1;
console.log("la nueva var Scroll es " + Scroll);


/*script que bloquea scroll al principio*/



function activarScroll() {
	document.body.style.overflow = "auto";
	console.log("scroll funcionando. Var Scroll= "+Scroll);
}

function cerrarObj() {
           document.getElementById("modalObjetivo").style.display="none";
        }

function modalObj() {
			document.getElementById("textoObjetivo").style.scale=".1";
			document.getElementById("modalObjetivo").style.opacity="0";
			setTimeout(cerrarObj, 400);
			document.getElementById("ojo").style.display="block";
			activarScroll();
		}



var L=1

function cerrarBiblio() {
	document.getElementById("modalBiblio").style.display=null;
}
function cerrarLegales() {
	document.getElementById("Legales").style.display=null;
}

function verBiblio() {
			if (L==1) {
				document.getElementById("modalBiblio").style.display="block";
				document.getElementById("modalBiblio").style.opacity="1";
				document.body.style.overflow = "hidden";
				L=2;
				console.log("biblio abierta");
			} else {
				setTimeout(cerrarBiblio, 400);
				document.getElementById("modalBiblio").style.opacity="0";
				cerrarIndice(); /*Cierra menu desplegable*/
				document.body.style.overflow = "auto";
				activarScroll();
				L=1;
				console.log("biblio cerrada");
			}
}

function verLegales() {
	if (L==1) {
		document.getElementById("Legales").style.display="block";
		document.getElementById("Legales").style.opacity="1";
		document.body.style.overflow = "hidden";
		/*regresa la primer page de legales*/ document.getElementById("pagLegales").style.left="0";
		L=2;
		console.log("legales abiertas");
	} else {
		setTimeout(cerrarLegales, 400);
		document.getElementById("Legales").style.opacity="0";
		document.body.style.overflow = "auto";
		cerrarIndice();
		activarScroll();
		L=1;
		console.log("legales cerradas");
	}
}

function irCreditos() {
	document.getElementById("pagLegales").style.left="-100%";
}

function irAgradecimientos() {
	document.getElementById("pagLegales").style.left="-200%";
}

function irDirectorios() {
	document.getElementById("pagLegales").style.left="-300%";
}


		















