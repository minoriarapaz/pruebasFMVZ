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
	document.getElementById("modalLegales").style.display=null;
}
function cerrarIndice2() {
	document.getElementById("modalIndice").style.display=null;
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
				document.body.style.overflow = "auto";
				activarScroll();
				L=1;
				console.log("biblio cerrada");
			}
}

function verLegales() {
	if (L==1) {
		document.getElementById("modalLegales").style.display="block";
		document.getElementById("modalLegales").style.opacity="1";
		document.body.style.overflow = "hidden";/*regresa la primer page de legales*/
		document.getElementById("pagLegales").style.left="0";
		L=2;
		console.log("legales abiertas. L es " +L+ " (dos)");
	} else {
		setTimeout(cerrarLegales, 400);
		document.getElementById("modalLegales").style.opacity="0";
		document.body.style.overflow = "auto";
		activarScroll();
		L=1;
		console.log("legales cerradas. L es " + L + " (uno)");
	}
}

function verIndice2() {
	if (L==1) {
		document.getElementById("modalIndice").style.display="block";
		document.getElementById("modalIndice").style.opacity="1";
		document.body.style.overflow = "hidden";
		L=2;
		console.log("nuevo indice abierto");
		/*oculta btn Ojo y/o cierra los controles d lectura*/
		document.getElementById("ojo").style.visibility="hidden";
		cerrarControl();
		/*para cerrar este indice dando clic afuera*/
		document.getElementById("modalIndice").addEventListener("click", verIndice2);
	} else {
		setTimeout(cerrarIndice2, 300);
		document.getElementById("modalIndice").style.opacity="0";
		document.body.style.overflow = "auto";
		activarScroll();
		L=1;
		document.getElementById("ojo").style.visibility="visible";
		console.log("nuevo indice cerrado");
		/*quita el evento click del Modal alrededor del indice*/
		document.getElementById("modalIndice").removeEventListener("click", verIndice2);
		
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


		
/*CARGADOR*/
/*
window.onload = function() {
	$('#cerdito').fadeOut();
}
*/



window.onload = function() {
    const preloader = document.getElementById("cerdito"); 
/*    const progress = document.getElementById("progress"); */
    const percentageText = document.getElementById("percentage"); 
 /*   const content = document.getElementById('content'); */
 
    let percentage = 0; 
 
    const interval = setInterval(() => { 
        progreso += 10; // Increase percentage 
        /*percentageText.textContent = progreso + "%";*/ // Update percentage text 
		
		percentageText.innerHTML =  progreso + "%";
 
        if (progreso >= 100) { 
            clearInterval(interval); 
            preloader.style.display="none";// Hide preloader 
        } 
    }, 500); // Update every 500ms 
}; 












