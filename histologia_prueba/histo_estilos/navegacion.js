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

function irTablas() {
	window.scroll(
		{top: (document.getElementById("finSistemas").offsetTop - compensacion), left: 0, }
	);
	document.getElementById("anatomia_temas").style.height = "0px";	
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

function irTablasM() {
	window.scroll(
		{top: (document.getElementById("finSistemas").offsetTop - compensacion), left: 0, }
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

window.onscroll = function() {escrol_prologo(); escrol_introduccion(); escrol_material();  escrol_anatomia(); escrol_sistema1(); escrol_sistema2(); escrol_sistema3(); escrol_sistema4(); escrol_sistema5(); escrol_sistema6(); escrol_sistema7(); escrol_sistema8(); escrol_sistema9(); escrol_sistema10(); escrol_sistema11(); escrol_indexTablas()};
	
function escrol_prologo() {
	var tituloI = document.getElementById("aPrologo");
			var progreso = tituloI.offsetTop;
			
			if (window.scrollY < progreso) {
				document.getElementById("boton1").classList.add("activo");
				document.getElementById("boton2").classList.remove("activo");
				document.getElementById("boton3").classList.remove("activo");
				document.getElementById("boton4").classList.remove("activo");
				document.getElementById("boton7").classList.remove("activo");
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
				
				document.getElementById("boton7").classList.remove("activo");
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
				
				document.getElementById("boton7").classList.remove("activo");
			
			
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
				
				document.getElementById("boton7").classList.remove("activo");
				
				document.getElementById("anatomia_temas").style.height = "340px";
			} else {
				document.getElementById("anatomia_temas").style.height = "0px";
			}
		}

function escrol_indexTablas() {
			var titulo = document.getElementById("finSistemas");
			var progreso = titulo.offsetTop;
			
			if (window.scrollY > progreso) {
				document.getElementById("boton7").classList.add("activo");
				document.getElementById("boton1").classList.remove("activo");
				document.getElementById("boton2").classList.remove("activo");
				document.getElementById("boton3").classList.remove("activo");
				
				document.getElementById("boton4").classList.remove("activo");
				
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

/*Navegacion de indice de tablas*/

function irCuadro1() {
	window.scroll(
		{top: (document.getElementById("cuadro1").offsetTop), left: 0, }
	);
	console.log("cuadro 1");
}
function irCuadro2() {
	window.scroll(
		{top: (document.getElementById("cuadro2").offsetTop), left: 0, }
	);
	console.log("cuadro 2");
}

function irCuadro3() {
	window.scroll(
		{top: (document.getElementById("cuadro3").offsetTop), left: 0, }
	);
	console.log("cuadro 3");
}
function irCuadro4() {
	window.scroll(
		{top: (document.getElementById("cuadro4").offsetTop), left: 0, }
	);
	console.log("cuadro 4");
}

function irCuadro5() {
	window.scroll(
		{top: (document.getElementById("cuadro5").offsetTop), left: 0, }
	);
	console.log("cuadro 5");
}

function irCuadro6() {
	window.scroll(
		{top: (document.getElementById("cuadro6").offsetTop), left: 0, }
	);
	console.log("cuadro 6");
}

function irCuadro7() {
	window.scroll(
		{top: (document.getElementById("cuadro7").offsetTop), left: 0, }
	);
	console.log("cuadro 7");
}
function irCuadro8() {
	window.scroll(
		{top: (document.getElementById("cuadro8").offsetTop), left: 0, }
	);
	console.log("cuadro 8");
}
function irCuadro9() {
	window.scroll(
		{top: (document.getElementById("cuadro9").offsetTop), left: 0, }
	);
}
function irCuadro10() {
	window.scroll(
		{top: (document.getElementById("cuadro10").offsetTop), left: 0, }
	);
}

function irCuadro11() {
	window.scroll(
		{top: (document.getElementById("cuadro11").offsetTop), left: 0, }
	);
}
function irCuadro12() {
	window.scroll(
		{top: (document.getElementById("cuadro12").offsetTop), left: 0, }
	);
}
function irCuadro13() {
	window.scroll(
		{top: (document.getElementById("cuadro13").offsetTop), left: 0, }
	);
}
function irCuadro14() {
	window.scroll(
		{top: (document.getElementById("cuadro14").offsetTop), left: 0, }
	);
}
function irCuadro15() {
	window.scroll(
		{top: (document.getElementById("cuadro15").offsetTop), left: 0, }
	);
}
function irCuadro16() {
	window.scroll(
		{top: (document.getElementById("cuadro16").offsetTop), left: 0, }
	);
}
function irCuadro17() {
	window.scroll(
		{top: (document.getElementById("cuadro17").offsetTop), left: 0, }
	);
}
function irCuadro18() {
	window.scroll(
		{top: (document.getElementById("cuadro18").offsetTop), left: 0, }
	);
}
function irCuadro19() {
	window.scroll(
		{top: (document.getElementById("cuadro19").offsetTop), left: 0, }
	);
}
function irCuadro20() {
	window.scroll(
		{top: (document.getElementById("cuadro20").offsetTop), left: 0, }
	);
}
function irCuadro21() {
	window.scroll(
		{top: (document.getElementById("cuadro21").offsetTop), left: 0, }
	);
}
function irCuadro22() {
	window.scroll(
		{top: (document.getElementById("cuadro22").offsetTop), left: 0, }
	);
}
function irCuadro23() {
	window.scroll(
		{top: (document.getElementById("cuadro23").offsetTop), left: 0, }
	);
}
function irCuadro24() {
	window.scroll(
		{top: (document.getElementById("cuadro24").offsetTop), left: 0, }
	);
}
function irCuadro25() {
	window.scroll(
		{top: (document.getElementById("cuadro25").offsetTop), left: 0, }
	);
}
function irCuadro26() {
	window.scroll(
		{top: (document.getElementById("cuadro26").offsetTop), left: 0, }
	);
}
function irCuadro27() {
	window.scroll(
		{top: (document.getElementById("cuadro27").offsetTop), left: 0, }
	);
}
function irCuadro28() {
	window.scroll(
		{top: (document.getElementById("cuadro28").offsetTop), left: 0, }
	);
}
function irCuadro29() {
	window.scroll(
		{top: (document.getElementById("cuadro29").offsetTop), left: 0, }
	);
}
/*==============********************* CARGA DE I F R A M E S ************************=======*/


let frutas = ["Manzana", "Banana", "Mora"];
var beatles = ["George", "Paul", "Ringo", "John"];



