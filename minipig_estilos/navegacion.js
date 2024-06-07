// JavaScript Document



/*FUNCION DEL MENU DESPLEGABLE PARA MOBIL*/

console.log("variable i es "+i);

		function show_indice() {
			if (i==1) {
				document.getElementById("nav-indice").style.display="block";
				i=2;
				document.getElementById("btnindice").style.backgroundColor="ghostwhite";
				document.getElementById("rayas").style.display="none";
				document.getElementById("laX").style.display="block";
				/*CIERRA EL CONTROL DE LECTURA si está ABIERTO*/
				document.getElementById("Control").style.height="0px";
				document.getElementById("ojo").style.display="none";
				console.log("cerraste control");
				/*CONTROL LECTURA*/
			}
			else {
				i=1;
				document.getElementById("nav-indice").style.display="none";/*(antes null)*/
				document.getElementById("btnindice").style.backgroundColor="transparent";/*(antes null)*/
				/*document.getElementById("nav-indice").style.height="500px";*/
				document.getElementById("rayas").style.display="block";
				document.getElementById("laX").style.display="none";
				/*muestra el ojo*/
				document.getElementById("ojo").style.display="block";
				
			}
		} /*FIN  SHOW_INDICE*/

function cerrarIndice() {
	i=1;
	document.getElementById("nav-indice").style.display="none";/*(antes null)*/
	document.getElementById("btnindice").style.backgroundColor="transparent";/*(antes null)*/
				
	document.getElementById("rayas").style.display="block";
	document.getElementById("laX").style.display="none";
}

/*FUNCION DEL MENU DESPLEGABLE PARA MOBIL  acaba*/


/***********ABRIR PDFs**************/

function abrir1() {
	window.open("pdf/anatomia_cerebro.pdf", "_blank");
}
function abrir2() {
	window.open("pdf/anatomia_corazon.pdf", "_blank");
}
function abrir3() {
	window.open("pdf/anatomia_lengua.pdf", "_blank");
}
function abrir4() {
	window.open("pdf/anatomia_rinon.pdf", "_blank");
}
function abrir5() {
	window.open("pdf/anatomia_ovario.pdf", "_blank");
}

function abrir6() {
	window.open("pdf/anatomia_testiculo.pdf", "_blank");
}
function abrir7() {
	window.open("pdf/anatomia_tiroides.pdf", "_blank");
}
function abrir7a() {
	window.open("pdf/anatomia_adrenal.pdf", "_blank");
}
function abrir8() {
	window.open("pdf/anatomia_timo.pdf", "_blank");
}
function abrir9() {
	window.open("pdf/anatomia_piel.pdf", "_blank");
}
function abrir10() {
	window.open("pdf/anatomia_pierna.pdf", "_blank");
}
function abrir11() {
	window.open("pdf/anatomia_pulmon.pdf", "_blank");
}
function abrir12() {
	window.open("pdf/anatomia_ojo.pdf", "_blank");
}



/* -------------------FUNCIONES PARA bolas (botones) de NAVEGACION-------------------*/

var compensacion = -1;


function irPrologo() {
	window.scrollTo(0, 0);
	document.getElementById("anatomia_temas").style.height = "0px";
}

function irIntro() {
	
	window.scroll(
		{top: (document.getElementById("aIntro").offsetTop - compensacion), left: 0, }
	);
	document.getElementById("anatomia_temas").style.height = "0px";
	
	/*document.getElementById("bolas").style.visibility = "visible";*/
		}

function irMaterial() {
	window.scroll(
		{top: (document.getElementById("aMaterial").offsetTop - compensacion), left: 0, }
	);
	document.getElementById("anatomia_temas").style.height = "0px";
}

function irAnatomia() {
	window.scroll(
		{top: (document.getElementById("aAnatomia").offsetTop - compensacion), left: 0, }
	);
	document.getElementById("anatomia_temas").style.height = "340px";
	
/*	document.getElementById("anatomia_temas").style.height = "340px";*/
	
}

function irSistema1() {
	window.scroll(
		{top: (document.getElementById("sistema1").offsetTop - compensacion), left: 0, }
	);
	console.log("sistema nervioso");
}

function irSistema2() {
	window.scroll(
		{top: (document.getElementById("sistema2").offsetTop - compensacion), left: 0, }
	);
	console.log("sistema cardiovascular");
}
function irSistema3() {
	window.scroll(
		{top: (document.getElementById("sistema3").offsetTop - compensacion), left: 0, }
	);
	console.log("sistema digestivo");
}
function irSistema4() {
	window.scroll(
		{top: (document.getElementById("sistema4").offsetTop - compensacion), left: 0, }
	);
	console.log("sistema urinario");
}
function irSistema5() {
	window.scroll(
		{top: (document.getElementById("sistema5").offsetTop - compensacion), left: 0, }
	);
	console.log("organos genitales hembra");
}
function irSistema6() {
	window.scroll(
		{top: (document.getElementById("sistema6").offsetTop - compensacion), left: 0, }
	);
	console.log("organos genitales macho");
}
function irSistema7() {
	window.scroll(
		{top: (document.getElementById("sistema7").offsetTop - compensacion), left: 0, }
	);
	console.log("sistema endócrino");
}
function irSistema8() {
	window.scroll(
		{top: (document.getElementById("sistema8").offsetTop - compensacion), left: 0, }
	);
	console.log("organos linfoides");
}
function irSistema9() {
	window.scroll(
		{top: (document.getElementById("sistema9").offsetTop - compensacion), left: 0, }
	);
	console.log("sistema tegumentario y locomotor");
}
function irSistema10() {
	window.scroll(
		{top: (document.getElementById("sistema10").offsetTop - compensacion), left: 0, }
	);
	console.log("sistema respiratorio");
}
function irSistema11() {
	window.scroll(
		{top: (document.getElementById("sistema11").offsetTop - compensacion), left: 0, }
	);
	console.log("ojo");
}


function irBiblio() {
	window.open("bibliografia.html", "_self");
}


function irPrologoM() {
	window.scrollTo(0, 0);
	show_indice();
}

function irIntroM() {
	window.scroll({top: (document.getElementById("aIntro").offsetTop - compensacion), left: 0, });
	show_indice();
}
function irMaterialM() {
	window.scroll(
		{top: (document.getElementById("aMaterial").offsetTop - compensacion), left: 0, }
	);
	show_indice();
}

function irAnatomiaM() {
	window.scroll(
		{top: (document.getElementById("aAnatomia").offsetTop - compensacion), left: 0, }
	);
	show_indice();
		}
function irBiblioM() {
	show_indice();
}


/*FUNCIONES PARA BOTONES DEL MENU (DE ANATOMIA) MOBIL*/
function irSistema1M() {
	window.scroll(
		{top: (document.getElementById("sistema1").offsetTop - compensacion), left: 0, }
	);
	show_indice();
}

function irSistema2M() {
	window.scroll(
		{top: (document.getElementById("sistema2").offsetTop - compensacion), left: 0, }
	);
	show_indice();
}
function irSistema3M() {
	window.scroll(
		{top: (document.getElementById("sistema3").offsetTop - compensacion), left: 0, }
	);
	show_indice();
}
function irSistema4M() {
	window.scroll(
		{top: (document.getElementById("sistema4").offsetTop - compensacion), left: 0, }
	);
	show_indice();
}
function irSistema5M() {
	window.scroll(
		{top: (document.getElementById("sistema5").offsetTop - compensacion), left: 0, }
	);
	show_indice();
}
function irSistema6M() {
	window.scroll(
		{top: (document.getElementById("sistema6").offsetTop - compensacion), left: 0, }
	);
	show_indice();
}
function irSistema7M() {
	window.scroll(
		{top: (document.getElementById("sistema7").offsetTop - compensacion), left: 0, }
	);
	show_indice();
}
function irSistema8M() {
	window.scroll(
		{top: (document.getElementById("sistema8").offsetTop - compensacion), left: 0, }
	);
	show_indice();
}
function irSistema9M() {
	window.scroll(
		{top: (document.getElementById("sistema9").offsetTop - compensacion), left: 0, }
	);
	show_indice();
}
function irSistema10M() {
	window.scroll(
		{top: (document.getElementById("sistema10").offsetTop - compensacion), left: 0, }
	);
	show_indice();
}
function irSistema11M() {
	window.scroll(
		{top: (document.getElementById("sistema11").offsetTop - compensacion), left: 0, }
	);
	show_indice();
}









/*================FUNCION PARA EL S C R O L L y el INDICE LATERAL==============*/

$(document).ready(function(){
	
	
	/*$("#boton1").click(function(){
    $(this).addClass("activo");
	  $(this).siblings().removeClass("activo");
  });
	
  $("#boton2").click(function(){
    $(this).addClass("activo");
	  $(this).siblings().removeClass("activo");
  });
	
	$("#boton3").click(function(){
    $(this).addClass("activo");
	$(this).siblings().removeClass("activo");
  });
	
	$("#boton4").click(function(){
    $(this).addClass("activo");
	$(this).siblings().removeClass("activo");
		
	});*/
	
	/*SUBINDICE */
	
	/*$("#btnSub1").click(function(){
    $(this).toggleClass("activoSub");
	$(this).siblings().removeClass("activoSub");
	});
	
	$("#btnSub2").click(function(){
    $(this).toggleClass("activoSub");
	$(this).siblings().removeClass("activoSub");
	});
	$("#btnSub3").click(function(){
    $(this).toggleClass("activoSub");
	$(this).siblings().removeClass("activoSub");
	});
	$("#btnSub4").click(function(){
    $(this).toggleClass("activoSub");
	$(this).siblings().removeClass("activoSub");
	});
	$("#btnSub5").click(function(){
    $(this).toggleClass("activoSub");
	$(this).siblings().removeClass("activoSub");
	});
	$("#btnSub6").click(function(){
    $(this).toggleClass("activoSub");
	$(this).siblings().removeClass("activoSub");
	});
	$("#btnSub7").click(function(){
    $(this).toggleClass("activoSub");
	$(this).siblings().removeClass("activoSub");
	});
	$("#btnSub8").click(function(){
    $(this).toggleClass("activoSub");
	$(this).siblings().removeClass("activoSub");
	});
	$("#btnSub9").click(function(){
    $(this).toggleClass("activoSub");
	$(this).siblings().removeClass("activoSub");
	});
	$("#btnSub10").click(function(){
    $(this).toggleClass("activoSub");
	$(this).siblings().removeClass("activoSub");
	});
	$("#btnSub11").click(function(){
    $(this).toggleClass("activoSub");
	$(this).siblings().removeClass("activoSub");
	});
	$("#btnSub12").click(function(){
    $(this).toggleClass("activoSub");
	$(this).siblings().removeClass("activoSub");
	});*/
});

window.onscroll = function() {escrol_prologo(); escrol_introduccion(); escrol_material();  escrol_anatomia(); escrol_sistema1(); escrol_sistema2(); escrol_sistema3(); escrol_sistema4(); escrol_sistema5(); escrol_sistema6(); escrol_sistema7(); escrol_sistema8(); escrol_sistema9(); escrol_sistema10(); escrol_sistema11();};
	
function escrol_prologo() {
	var tituloI = document.getElementById("aPrologo");
			var progreso = tituloI.offsetTop;
			
			if (window.scrollY < progreso) {
				document.getElementById("boton1").classList.add("activo");
				document.getElementById("boton2").classList.remove("activo");
				document.getElementById("boton3").classList.remove("activo");
				document.getElementById("boton4").classList.remove("activo");
			}
}
function escrol_introduccion() {
			var titulo = document.getElementById("aIntro");
			var progreso = titulo.offsetTop;
			
			if (window.scrollY > progreso) {
				document.getElementById("boton2").classList.add("activo");
				document.getElementById("boton1").classList.remove("activo");
				document.getElementById("boton3").classList.remove("activo");
				document.getElementById("boton4").classList.remove("activo");
			}
		}	

function escrol_material() {
			var titulo = document.getElementById("aMaterial");
			var progreso = titulo.offsetTop;
			
			if (window.scrollY > progreso) {
				document.getElementById("boton3").classList.add("activo");
				document.getElementById("boton1").classList.remove("activo");
				document.getElementById("boton2").classList.remove("activo");
				document.getElementById("boton4").classList.remove("activo");
			
			
			} else {
				/*console.log("aun no llegas");*/
			}
		}

function escrol_anatomia() {
			var titulo = document.getElementById("aAnatomia");
			var progreso = titulo.offsetTop;
			
			if (window.scrollY > progreso) {
				document.getElementById("boton4").classList.add("activo");
				document.getElementById("boton1").classList.remove("activo");
				document.getElementById("boton2").classList.remove("activo");
				document.getElementById("boton3").classList.remove("activo");
				
				document.getElementById("anatomia_temas").style.height = "340px";
			} else {
				document.getElementById("anatomia_temas").style.height = "0px";
			}
		}	


function escrol_sistema1() {
			var titulo = document.getElementById("sistema1");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema2");
			var Desprogreso = otroTitulo.offsetTop;
			
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub1").classList.add("activoSub");
			} else {document.getElementById("btnSub1").classList.remove("activoSub");}
		}

function escrol_sistema2() {
			var titulo = document.getElementById("sistema2");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema3");
			var Desprogreso = otroTitulo.offsetTop;
	
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub2").classList.add("activoSub");
			} else {document.getElementById("btnSub2").classList.remove("activoSub");}
		}

function escrol_sistema3() {
			var titulo = document.getElementById("sistema3");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema4");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub3").classList.add("activoSub");
			} else {document.getElementById("btnSub3").classList.remove("activoSub");}
		}
function escrol_sistema4() {
			var titulo = document.getElementById("sistema4");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema5");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub4").classList.add("activoSub");
			} else {document.getElementById("btnSub4").classList.remove("activoSub");}
		}
function escrol_sistema5() {
			var titulo = document.getElementById("sistema5");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema6");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub5").classList.add("activoSub");
			} else {document.getElementById("btnSub5").classList.remove("activoSub");}
		}
function escrol_sistema6() {
			var titulo = document.getElementById("sistema6");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema7");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub6").classList.add("activoSub");
			} else {document.getElementById("btnSub6").classList.remove("activoSub");}
		}

function escrol_sistema7() {
			var titulo = document.getElementById("sistema7");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema8");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub7").classList.add("activoSub");
			} else {document.getElementById("btnSub7").classList.remove("activoSub");}
		}
function escrol_sistema8() {
			var titulo = document.getElementById("sistema8");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema9");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub8").classList.add("activoSub");
			} else {document.getElementById("btnSub8").classList.remove("activoSub");}
		}
function escrol_sistema9() {
			var titulo = document.getElementById("sistema9");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema10");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub9").classList.add("activoSub");
			} else {document.getElementById("btnSub9").classList.remove("activoSub");}
		}
function escrol_sistema10() {
			var titulo = document.getElementById("sistema10");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema11");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub10").classList.add("activoSub");
			} else {document.getElementById("btnSub10").classList.remove("activoSub");}
		}
function escrol_sistema11() {
			var titulo = document.getElementById("sistema11");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("finSistemas");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub11").classList.add("activoSub");
			} else {document.getElementById("btnSub11").classList.remove("activoSub");}
		}



/*==============********************* CARGA DE I F R A M E S ************************=======*/


let frutas = ["Manzana", "Banana", "Mora"];
var beatles = ["George", "Paul", "Ringo", "John"];



	
/*function cargarAll(e) {
	const Dias = document.querySelectorAll("#Dia0, #Dia0ex, #Dia1, #Dia1ex, #Dia2, #Dia2ex, #Dia3, #Dia3ex, #Dia4, #Dia4ex, #Dia5, #Dia5ex, #Dia6, #Dia6ex, #Dia7, #Dia7ex, #Dia8, #Dia8ex, #Dia9, #Dia9ex, #Dia10, #Dia10ex, #Dia11, #Dia11ex, #Dia12ex, #Dia13, #Dia13ex, #Dia14, #Dia14ex, #Dia15, #Dia15ex, #Dia16, #Dia16ex, #Dia17ex");
	///Dias[e].style.backgroundColor = "blue";
	
	/*for (let i = 0; i < Dias.length; i++) {
  		Dias[i].style.backgroundColor = "Red";
	}
	console.log(frutas);
	console.log(Dias.length);
}*/


/*FUNCIONES OCULTAR*/

/*BORRASTE ESTO*/

/*FUNCIONES OCULTAR TERMINAN*/
/*+++++++++
	-----
	----
---*/




/*==============FIN BOTONES BOLAS =======*/

/*PROGRAMACION DE SCROLL + BOLAS ACTIVAS ======*/

/*function Mostrar() {
	var revelado = document.querySelectorAll(".revela");
	for (var R = 0; R < revelado.length; R++) {
		var windowHeight = window.innerHeight;
  		var elementTop = revelado[R].getBoundingClientRect().top;
  		var elementVisible = 150;
		if (elementTop < windowHeight - elementVisible) {
			revelado[i].classList.add("Si");}
		else {revelado[i].classList.remove("Si");
			 }
	}
}

window.addEventListener("scroll", Mostrar);
Mostrar();*/
