// JavaScript Document



$(document).ready(function(){
	
  $("#boton2").click(function(){
	  $(this).addClass("activo");
	  $("#boton1").removeClass("activo");
	  $("#boton3").removeClass("activo");
  });
	
	$("#boton1").click(function(){
	  $(this).addClass("activo");
	  $("#boton2").removeClass("activo");
	  $("#boton3").removeClass("activo");
  });
	
	$("#boton3").click(function(){
	  $(this).addClass("activo");
	  $("#boton1").removeClass("activo");
	  $("#boton2").removeClass("activo");
  });
	
});

/* javascript clasico DESDE AQUI*/
/* javascript clasico DESDE AQUI*/
/* javascript clasico DESDE AQUI*/
/* javascript clasico DESDE AQUI*/
/* javascript clasico DESDE AQUI*/
/* javascript clasico DESDE AQUI*/
/* javascript clasico DESDE AQUI*/
/* javascript clasico DESDE AQUI*/

function irPrope1() {
	alert("Ir a propedéutica de los pequeños rumiantes");
	window.open("pequenos.html", "_self");
}
function irPrope2() {
	alert("Ir a propedéutica de los bovinos");
	window.open("https://www.w3schools.com", "_self");
}

function irMetodos() {
	window.scroll(
		{top: (document.getElementById("parte2").offsetTop - 200), left: 0 }
	);
	console.log("Métodos físicos de exploración");
}
function irIntroduccion() {
	window.scroll(
		{top: (document.getElementById("parte1").offsetTop - 200), left: 0 }
	);
	console.log("¡Qué es la semiologia?");
}

function irExamen() {
	window.scroll(
		{top: (document.getElementById("parte3").offsetTop - 200), left: 0 }
	);
	console.log("Examen clinico");
}


/*---------funcion para activas los botones usando SCROLL */

window.onscroll = function() {escrol_2(), escrol_3()};
	
function escrol_2() {
	var titulo1 = document.getElementById("parte2");
			var progreso = titulo1.offsetTop - 210;
			
			if (window.scrollY > progreso) {
				document.getElementById("boton2").classList.add("activo");
				document.getElementById("boton1").classList.remove("activo");
				document.getElementById("boton3").classList.remove("activo");
			} 
	/*PARA QUE EL PRIMER BOTON PERMANEZCA ACTIVO O SE ACTIVE AL RETROCEDER*/
	else if (window.scrollY < progreso) {
				document.getElementById("boton1").classList.add("activo");
				document.getElementById("boton2").classList.remove("activo");
				document.getElementById("boton3").classList.remove("activo");
			}
}

function escrol_3() {
	var titulo1 = document.getElementById("parte3");
			var progreso = titulo1.offsetTop -210;
			
			if (window.scrollY > progreso) {
				document.getElementById("boton3").classList.add("activo");
				document.getElementById("boton1").classList.remove("activo");
				document.getElementById("boton2").classList.remove("activo");
			}
}

/*function escrol_1() {
	var titulo1 = document.getElementById("parte1");
			var progreso = titulo1.offsetTop;
			
			if (window.scrollY < progreso) {
				document.getElementById("boton1").classList.add("activo");
				document.getElementById("boton2").classList.remove("activo");
				document.getElementById("boton3").classList.remove("activo");
			}
}*/
