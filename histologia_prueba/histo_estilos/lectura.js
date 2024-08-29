// JavaScript Document



function agrandar(t) {
	if (t == 0) {
	document.getElementById("Contenido").style.fontSize = "large";
		cerrarControl();
	}
	else if (t == 1) {
		document.getElementById("Contenido").style.fontSize = "x-large";
		cerrarControl();
	}
}
function achicar() {
	document.getElementById("Contenido").style.fontSize = "initial";
	cerrarControl();
}

function colorOscuro() {
	document.getElementById("Contenido").style.backgroundColor ="black";
	document.getElementById("botonOjo").src="histologia_img/interfaz/icon_ojoblanco.png";
	/*document.getElementById("Contenido").style.color="gainsboro";*/
	document.getElementById("fondoBiblio").style.backgroundColor="rgba(0, 0, 0, .8)";
	document.getElementById("fondoLegal").style.backgroundColor="rgba(0, 0, 0, .8)";
	cerrarControl();
}
function colorMedio() {
	document.getElementById("Contenido").style.backgroundColor ="bisque";
	document.getElementById("botonOjo").src="histologia_img/interfaz/icon_ojoazul.png";
	
	document.getElementById("fondoBiblio").style.backgroundColor="bisque";
	document.getElementById("fondoLegal").style.backgroundColor="bisque";
	cerrarControl();
	
}
function colorClaro() {
	document.getElementById("Contenido").style.backgroundColor ="ghostwhite";
	document.getElementById("botonOjo").src="histologia_img/interfaz/icon_ojoazul.png";
	
	document.getElementById("fondoBiblio").style.backgroundColor="ghostwhite";
	document.getElementById("fondoLegal").style.backgroundColor="ghostwhite";
	
	cerrarControl();
}



$(document).ready(function(){
  $("#bOscuro").click(function(){
	$(this).addClass("defaul");
	$(this).siblings().removeClass("defaul");
	$("p").addClass("textoColorClaro");
	$("p").removeClass("textoColorMedio textoColorDefaul")
	$(".textos ol").removeClass("textoColorMedio");
	$(".textos ul").removeClass("textoColorMedio");

	$("h2").addClass("textoColorClaro");
	$("h3").addClass("textoColorClaro");
	$("h4").addClass("textoColorClaro");
	$(".textos ol").addClass("textoColorClaro");
	
	$(".textos ul").addClass("textoColorClaro");
	$("caption").addClass("textoColorClaro");
	$("caption").removeClass("textoColorMedio");
  
	$(".captiongaleria").addClass("captionOscuro");
	$(".captiongaleria").removeClass("captionClaro captionMedio");
	$(".numbertext").addClass("txtGris");
  });
	
	$("#bMedio").click(function(){
    $(this).addClass("defaul");
	$(this).siblings().removeClass("defaul");
	$(".textos p").addClass("textoColorMedio");
	$(".captiongaleria p").addClass("textoColorClaro");
	$(".textos ol").addClass("textoColorMedio");
	$(".textos ul").addClass("textoColorMedio");
		
	$("p").removeClass("textoColorClaro textoColorDefaul")
	$("h2").removeClass("textoColorClaro");
	$("h3").removeClass("textoColorClaro");
	$("h4").removeClass("textoColorClaro");
		
	$(".textos ol").removeClass("textoColorClaro");
	$(".textos ul").removeClass("textoColorClaro");
		
	$("caption").addClass("textoColorMedio");
	$("caption").removeClass("textoColorClaro");
	
	$(".captiongaleria").addClass("captionMedio");
	$(".captiongaleria").removeClass("captionClaro captionOscuro");
	$(".numbertext").removeClass("txtGris");
	
  });
	
	
	$("#bClaro").click(function(){
    $(this).addClass("defaul");
	$(this).siblings().removeClass("defaul");
	$("p").addClass("textoColorDefaul");
	$("p").removeClass("textoColorMedio textoColorClaro")
		
	
	$("h2").removeClass("textoColorClaro");
	$("h3").removeClass("textoColorClaro");
	$("h4").removeClass("textoColorClaro");
		
	$(".textos ol").removeClass("textoColorClaro textoColorMedio");
	$(".textos ul").removeClass("textoColorClaro textoColorMedio");
		
	$("caption").removeClass("textoColorClaro");
	
	$(".captiongaleria").addClass("captionClaro");
	$(".captiongaleria").removeClass("captionMedio captionOscuro");
	$(".numbertext").removeClass("txtGris");
  });
});

$(document).ready(function(){
  $("#bLM").click(function(){
    $(this).addClass("defaul");
	$(this).siblings().removeClass("defaul");
  });
	$("#bLG").click(function(){
    $(this).addClass("defaul");
	$(this).siblings().removeClass("defaul");
  });
	$("#bLEG").click(function(){
    $(this).addClass("defaul");
	$(this).siblings().removeClass("defaul");
  });
});

/*$(document).ready(function(){
  $("#btn_cerrar").click(function(){
    $("#Control").css("opacity", ".5");
	  console.log("hey");
  });
	
});*/

function showControl() {
	document.getElementById("Control").style.height="60px";
	document.getElementById("ojo").style.display="none";
	console.log("abriste control de lectura");
	
	document.getElementById("Contenido").addEventListener("click", cerrarControl);
}
function cerrarControl() {
	document.getElementById("Control").style.height="0px";
	document.getElementById("ojo").style.display="block";
	console.log("cerraste control");
	document.getElementById("Contenido").removeEventListener("click", cerrarControl);
}