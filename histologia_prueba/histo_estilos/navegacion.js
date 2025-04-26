// JavaScript Document



/*FUNCION DEL MENU DESPLEGABLE PARA MOBIL
FUERON PASADAS A MODAL.JS*/

console.log("variable i es "+i);

		/*funcion show_indice borrada (ver en "reservas2")*/




/***********SCROLLING Y ETC**************/


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
	console.log("sistema tegumentario");
}
function irSistema10() {
	window.scroll(
		{top: (document.getElementById("sistema10").offsetTop - compensacion), left: 0, }
	);
	console.log("sistema locomotor");
}
function irSistema11() {
	window.scroll(
		{top: (document.getElementById("sistema11").offsetTop - compensacion), left: 0, }
	);
	console.log("sistema respiratorio");
}

function irSistema12() {
	window.scroll(
		{top: (document.getElementById("sistema12").offsetTop - compensacion), left: 0, }
	);
	console.log("ojo");
}


function irBiblio() {
	window.open("bibliografia.html", "_self");
}


function irPrologoM() {
	window.scrollTo(0, 0);
	verIndice2();
}

function irIntroM() {
	window.scroll({top: (document.getElementById("aIntro").offsetTop - compensacion), left: 0, });
	verIndice2();
}
function irMaterialM() {
	window.scroll(
		{top: (document.getElementById("aMaterial").offsetTop - compensacion), left: 0, }
	);
	verIndice2();
}

function irAnatomiaM() {
	window.scroll(
		{top: (document.getElementById("aAnatomia").offsetTop - compensacion), left: 0, }
	);
	verIndice2();
		}
function irBiblioM() {
	verIndice2();
}


/*FUNCIONES PARA BOTONES DEL MENU (DE ANATOMIA) MOBIL*/
function irSistema1M() {
	window.scroll(
		{top: (document.getElementById("sistema1").offsetTop - compensacion), left: 0, }
	);
	verIndice2();
}

function irSistema2M() {
	window.scroll(
		{top: (document.getElementById("sistema2").offsetTop - compensacion), left: 0, }
	);
	verIndice2();
}
function irSistema3M() {
	window.scroll(
		{top: (document.getElementById("sistema3").offsetTop - compensacion), left: 0, }
	);
	verIndice2();
}
function irSistema4M() {
	window.scroll(
		{top: (document.getElementById("sistema4").offsetTop - compensacion), left: 0, }
	);
	verIndice2();
}
function irSistema5M() {
	window.scroll(
		{top: (document.getElementById("sistema5").offsetTop - compensacion), left: 0, }
	);
	verIndice2();
}
function irSistema6M() {
	window.scroll(
		{top: (document.getElementById("sistema6").offsetTop - compensacion), left: 0, }
	);
	verIndice2();
}
function irSistema7M() {
	window.scroll(
		{top: (document.getElementById("sistema7").offsetTop - compensacion), left: 0, }
	);
	verIndice2();
}
function irSistema8M() {
	window.scroll(
		{top: (document.getElementById("sistema8").offsetTop - compensacion), left: 0, }
	);
	verIndice2();
}
function irSistema9M() {
	window.scroll(
		{top: (document.getElementById("sistema9").offsetTop - compensacion), left: 0, }
	);
	verIndice2();
}
function irSistema10M() {
	window.scroll(
		{top: (document.getElementById("sistema10").offsetTop - compensacion), left: 0, }
	);
	verIndice2();
}
function irSistema11M() {
	window.scroll(
		{top: (document.getElementById("sistema11").offsetTop - compensacion), left: 0, }
	);
	verIndice2();
}
function irSistema12M() {
	window.scroll(
		{top: (document.getElementById("sistema12").offsetTop - compensacion), left: 0, }
	);
	verIndice2();
}

function irTablasM() {
	window.scroll(
		{top: (document.getElementById("finSistemas").offsetTop - compensacion), left: 0, }
	);
	verIndice2();
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

window.onscroll = function() {escrol_prologo(); escrol_introduccion(); escrol_material();  escrol_anatomia(); escrol_sistema1(); escrol_sistema2(); escrol_sistema3(); escrol_sistema4(); escrol_sistema5(); escrol_sistema6(); escrol_sistema7(); escrol_sistema8(); escrol_sistema9(); escrol_sistema10(); escrol_sistema11(); escrol_sistema12(); escrol_indexTablas()};
	
function escrol_prologo() {
	var tituloI = document.getElementById("aPrologo");
			var progreso = tituloI.offsetTop;
			
			if (window.scrollY < progreso) {
				document.getElementById("boton1").classList.add("activo");
				document.getElementById("boton2").classList.remove("activo");
				document.getElementById("boton3").classList.remove("activo");
				document.getElementById("boton4").classList.remove("activo");
				document.getElementById("boton7").classList.remove("activo");
				
				document.getElementById("B1").classList.add("activo");
				document.getElementById("B2").classList.remove("activo");
				document.getElementById("B3").classList.remove("activo");
				document.getElementById("B4").classList.remove("activo");
				document.getElementById("B5").classList.remove("activo");
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
				
				document.getElementById("B2").classList.add("activo");
				document.getElementById("B1").classList.remove("activo");
				document.getElementById("B3").classList.remove("activo");
				document.getElementById("B4").classList.remove("activo");
				document.getElementById("B5").classList.remove("activo");
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
				
				document.getElementById("B3").classList.add("activo");
				document.getElementById("B1").classList.remove("activo");
				document.getElementById("B2").classList.remove("activo");
				document.getElementById("B4").classList.remove("activo");
				
				document.getElementById("B5").classList.remove("activo");
			
			
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
				
				document.getElementById("B4").classList.add("activo");
				document.getElementById("B1").classList.remove("activo");
				document.getElementById("B2").classList.remove("activo");
				document.getElementById("B3").classList.remove("activo");
				document.getElementById("B5").classList.remove("activo");
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
				
				document.getElementById("B5").classList.add("activo");
				document.getElementById("B1").classList.remove("activo");
				document.getElementById("B2").classList.remove("activo");
				document.getElementById("B3").classList.remove("activo");
				document.getElementById("B4").classList.remove("activo");
			}
		}


function escrol_sistema1() {
			var titulo = document.getElementById("sistema1");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema2");
			var Desprogreso = otroTitulo.offsetTop;
			
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub1").classList.add("activoSub");
				document.getElementById("b1").classList.add("activoSub");
				/*visibilidad del tema en scroll*/
				document.getElementById("tema1").classList.remove("NoVisible");
			} else {document.getElementById("btnSub1").classList.remove("activoSub"); document.getElementById("b1").classList.remove("activoSub");
				   document.getElementById("tema1").classList.add("NoVisible");}
		}

function escrol_sistema2() {
			var titulo = document.getElementById("sistema2");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema3");
			var Desprogreso = otroTitulo.offsetTop;
	
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub2").classList.add("activoSub");
				document.getElementById("b2").classList.add("activoSub");
				/*visibilidad del tema en scroll*/
				document.getElementById("tema2").classList.remove("NoVisible");
			} else {document.getElementById("btnSub2").classList.remove("activoSub"); document.getElementById("b2").classList.remove("activoSub");
				   document.getElementById("tema2").classList.add("NoVisible");}
		}

function escrol_sistema3() {
			var titulo = document.getElementById("sistema3");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema4");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub3").classList.add("activoSub");
				document.getElementById("b3").classList.add("activoSub");
				document.getElementById("tema3").classList.remove("NoVisible");
			} else {document.getElementById("btnSub3").classList.remove("activoSub"); document.getElementById("b3").classList.remove("activoSub");
				   document.getElementById("tema3").classList.add("NoVisible");}
		}
function escrol_sistema4() {
			var titulo = document.getElementById("sistema4");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema5");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub4").classList.add("activoSub");
				document.getElementById("b4").classList.add("activoSub");
				document.getElementById("tema4").classList.remove("NoVisible");
			} else {document.getElementById("btnSub4").classList.remove("activoSub"); document.getElementById("b4").classList.remove("activoSub");
				   document.getElementById("tema4").classList.add("NoVisible");}
		}
function escrol_sistema5() {
			var titulo = document.getElementById("sistema5");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema6");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub5").classList.add("activoSub");
				document.getElementById("b5").classList.add("activoSub");
				document.getElementById("tema5").classList.remove("NoVisible");
			} else {document.getElementById("btnSub5").classList.remove("activoSub"); document.getElementById("b5").classList.remove("activoSub");
				   document.getElementById("tema5").classList.add("NoVisible");}
		}
function escrol_sistema6() {
			var titulo = document.getElementById("sistema6");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema7");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub6").classList.add("activoSub");
				document.getElementById("b6").classList.add("activoSub");
				document.getElementById("tema6").classList.remove("NoVisible");
			} else {document.getElementById("btnSub6").classList.remove("activoSub"); document.getElementById("b6").classList.remove("activoSub");
				   document.getElementById("tema6").classList.add("NoVisible");}
		}

function escrol_sistema7() {
			var titulo = document.getElementById("sistema7");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema8");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub7").classList.add("activoSub");
				document.getElementById("b7").classList.add("activoSub");
				document.getElementById("tema7").classList.remove("NoVisible");
			} else {document.getElementById("btnSub7").classList.remove("activoSub"); document.getElementById("b7").classList.remove("activoSub");
				   document.getElementById("tema7").classList.add("NoVisible");}
		}
function escrol_sistema8() {
			var titulo = document.getElementById("sistema8");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema9");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub8").classList.add("activoSub");
				document.getElementById("b8").classList.add("activoSub");
				document.getElementById("tema8").classList.remove("NoVisible");
			} else {document.getElementById("btnSub8").classList.remove("activoSub"); document.getElementById("b8").classList.remove("activoSub");
				   document.getElementById("tema8").classList.add("NoVisible");}
		}
function escrol_sistema9() {
			var titulo = document.getElementById("sistema9");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema10");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub9").classList.add("activoSub");
				document.getElementById("b9").classList.add("activoSub");
				document.getElementById("tema9").classList.remove("NoVisible");
			} else {document.getElementById("btnSub9").classList.remove("activoSub"); document.getElementById("b9").classList.remove("activoSub");
				   document.getElementById("tema9").classList.add("NoVisible");}
		}
function escrol_sistema10() {
			var titulo = document.getElementById("sistema10");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema11");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub10").classList.add("activoSub");
				document.getElementById("b10").classList.add("activoSub");
				document.getElementById("tema10").classList.remove("NoVisible");
			} else {document.getElementById("btnSub10").classList.remove("activoSub"); document.getElementById("b10").classList.remove("activoSub");
				   document.getElementById("tema10").classList.add("NoVisible");}
		}
function escrol_sistema11() {
			var titulo = document.getElementById("sistema11");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("sistema12");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub11").classList.add("activoSub");
				document.getElementById("b11").classList.add("activoSub");
				document.getElementById("tema11").classList.remove("NoVisible");
			} else {document.getElementById("btnSub11").classList.remove("activoSub"); document.getElementById("b11").classList.remove("activoSub");
				   document.getElementById("tema11").classList.add("NoVisible");}
		}
function escrol_sistema12() {
			var titulo = document.getElementById("sistema12");
			var progreso = titulo.offsetTop;
			var otroTitulo = document.getElementById("finSistemas");
			var Desprogreso = otroTitulo.offsetTop;
			if (window.scrollY > progreso && window.scrollY < Desprogreso) {
				document.getElementById("btnSub12").classList.add("activoSub");
				document.getElementById("b12").classList.add("activoSub");
				document.getElementById("tema12").classList.remove("NoVisible");
			} else {document.getElementById("btnSub12").classList.remove("activoSub"); document.getElementById("b12").classList.remove("activoSub");
				   document.getElementById("tema12").classList.add("NoVisible");}
		}

/*Navegacion de indice de tablas*/



function irGaleria1() {
	window.scroll(
		{top: (document.getElementById("galeria1").offsetTop), left: 0, }
	);
	console.log("galeria 1");
}
function irGaleria2() {
	window.scroll(
		{top: (document.getElementById("galeria2").offsetTop), left: 0, }
	);
	console.log("galeria 2");
}

function irGaleria3() {
	window.scroll(
		{top: (document.getElementById("galeria3").offsetTop), left: 0, }
	);
	console.log("galeria 3");
}
function irGaleria4() {
	window.scroll(
		{top: (document.getElementById("galeria4").offsetTop), left: 0, }
	);
	console.log("galeria 4");
}

function irGaleria5() {
	window.scroll(
		{top: (document.getElementById("galeria5").offsetTop), left: 0, }
	);
	console.log("galeria 5");
}

function irGaleria6() {
	window.scroll(
		{top: (document.getElementById("galeria6").offsetTop), left: 0, }
	);
	console.log("galeria 6");
}

function irGaleria7() {
	window.scroll(
		{top: (document.getElementById("galeria7").offsetTop), left: 0, }
	);
	console.log("galeria 7");
}
function irGaleria8() {
	window.scroll(
		{top: (document.getElementById("galeria8").offsetTop), left: 0, }
	);
	console.log("galeria 8");
}
function irGaleria9() {
	window.scroll(
		{top: (document.getElementById("galeria9").offsetTop), left: 0, }
	);
}
function irGaleria10() {
	window.scroll(
		{top: (document.getElementById("galeria10").offsetTop), left: 0, }
	);
}

function irGaleria11() {
	window.scroll(
		{top: (document.getElementById("galeria11").offsetTop), left: 0, }
	);
}
function irGaleria12() {
	window.scroll(
		{top: (document.getElementById("galeria12").offsetTop), left: 0, }
	);
}
function irGaleria13() {
	window.scroll(
		{top: (document.getElementById("galeria13").offsetTop), left: 0, }
	);
}
function irGaleria14() {
	window.scroll(
		{top: (document.getElementById("galeria14").offsetTop), left: 0, }
	);
}
function irGaleria15() {
	window.scroll(
		{top: (document.getElementById("galeria15").offsetTop), left: 0, }
	);
}
function irGaleria16() {
	window.scroll(
		{top: (document.getElementById("galeria16").offsetTop), left: 0, }
	);
}
function irGaleria17() {
	window.scroll(
		{top: (document.getElementById("galeria17").offsetTop), left: 0, }
	);
}
function irGaleria18() {
	window.scroll(
		{top: (document.getElementById("galeria18").offsetTop), left: 0, }
	);
}
function irGaleria19() {
	window.scroll(
		{top: (document.getElementById("galeria19").offsetTop), left: 0, }
	);
}
function irGaleria20() {
	window.scroll(
		{top: (document.getElementById("galeria20").offsetTop), left: 0, }
	);
}
function irGaleria21() {
	window.scroll(
		{top: (document.getElementById("galeria21").offsetTop), left: 0, }
	);
}
function irGaleria22() {
	window.scroll(
		{top: (document.getElementById("galeria22").offsetTop), left: 0, }
	);
}
function irGaleria23() {
	window.scroll(
		{top: (document.getElementById("galeria23").offsetTop), left: 0, }
	);
}
function irGaleria24() {
	window.scroll(
		{top: (document.getElementById("galeria24").offsetTop), left: 0, }
	);
}
function irGaleria25() {
	window.scroll(
		{top: (document.getElementById("galeria25").offsetTop), left: 0, }
	);
}
function irGaleria26() {
	window.scroll(
		{top: (document.getElementById("galeria26").offsetTop), left: 0, }
	);
}
function irGaleria27() {
	window.scroll(
		{top: (document.getElementById("galeria27").offsetTop), left: 0, }
	);
}
function irGaleria28() {
	window.scroll(
		{top: (document.getElementById("galeria28").offsetTop), left: 0, }
	);
}
function irGaleria29() {
	window.scroll(
		{top: (document.getElementById("galeria29").offsetTop), left: 0, }
	);
}
/*==============********************* CARGA DE I F R A M E S ************************=======*/


let frutas = ["Manzana", "Banana", "Mora"];
var beatles = ["George", "Paul", "Ringo", "John"];



