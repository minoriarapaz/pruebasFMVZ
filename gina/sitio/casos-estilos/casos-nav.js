// JavaScript Document


function Despliegue() {
	document.getElementById("subIndice").classList.toggle("indiceVisible");
}
/*para cambiar la Hamburguesa a X*/
function Equis(x) {
  x.classList.toggle("equis");
}

function activarScroll() {
	document.body.style.overflow = "auto";
	console.log("scroll funcionando");
}


let Abierto = 1;
function verIndice() {
	if (Abierto==1) {
		document.getElementById("Indice").style.left="0px";
		Abierto=2;
		document.body.style.overflow = "hidden";
		console.log("indice abierto. Variable Abierto es "+Abierto);
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
		Abierto=1;
		document.body.style.overflow = "auto";
		/*document.getElementById("ojo").style.visibility="visible";*/
		console.log("indice cerrado. Variable Abierto es "+Abierto);
		
		document.getElementById("hamburguesa").classList.toggle("equis");
		
	}
}

/*BOTONES DEL INDICE*/
function irPlanteamiento() {
	window.scroll(
		{top: (document.getElementById("Planteamiento").offsetTop), left: 0, }
	);
	document.getElementById("Indice").style.left="-300px";
	Abierto=1;
	document.body.style.overflow = "auto";
	console.log("indice cerrado. Variable Abierto es "+Abierto);
	document.getElementById("hamburguesa").classList.remove("equis");
}

function revisar() {
	alert(document.getElementById("Planteamiento").offsetTop);
}
function irCasos() {
	window.scroll(
		{top: /*768*/(document.getElementById("CasosClinicos").offsetTop /*- compensacion*/), left: 0, }
	);
	document.getElementById("Indice").style.left="-300px";
	Abierto=1;
	document.body.style.overflow = "auto";
	console.log("indice cerrado. Variable Abierto es "+Abierto);
	document.getElementById("hamburguesa").classList.remove("equis");
}
