// JavaScript Document


/*function myFunction() {
  document.getElementById("myDIV").style.transitionProperty = "width, height";
}*/

/*function showTexto1() {
			//document.getElementById("modalObjetivo").style.display="none";
			//document.getElementById("textoObjetivo").style.transform ="width(.5)";
			document.getElementById("texto1").style.opacity=".1";
			setTimeout(cerrarObj, 1000);
		}*/

var T=1
var T2=1
var T3=1
var T4=1
var T5=1
var T6=1
var T7=1
function showTexto() {
	if (T==1) {
		T=2;
		document.getElementById("texto1").style.height="auto";
		document.getElementById("texto1velo").style.display="none";
		document.getElementById("bot1").style.opacity=".5";
	} else if (T==2) {
		T=1;
		document.getElementById("texto1").style.height=null;
		document.getElementById("texto1velo").style.display=null;
		document.getElementById("bot1").style.opacity=null;
		setTimeout(scrolla3, 200);
	}
}
function showTexto2() {
	if (T2==1) {
		T2=2;
		document.getElementById("texto2").style.height="auto";
		document.getElementById("texto2velo").style.display="none";
		document.getElementById("bot2").style.opacity=".5";
	} else if (T2==2) {
		T2=1;
		document.getElementById("texto2").style.height=null;
		document.getElementById("texto2velo").style.display=null;
		document.getElementById("bot2").style.opacity=null;
		setTimeout(scrolla4, 200);
	}
}
function showTexto3() {
	if (T3==1) {
		T3=2;
		document.getElementById("texto3").style.height="auto";
		document.getElementById("texto3velo").style.display="none";
		document.getElementById("bot3").style.opacity=".5";
	} else {
		T3=1;
		document.getElementById("texto3").style.height=null;
		document.getElementById("texto3velo").style.display=null;
		document.getElementById("bot3").style.opacity=null;
		setTimeout(scrolla5, 200);
	}
}

function showTexto4() {
	if (T4==1) {
		T4=2;
		document.getElementById("texto4").style.height="auto";
		document.getElementById("texto4velo").style.display="none";
		document.getElementById("bot4").style.opacity=".5";
	} else if (T4==2) {
		T4=1;
		document.getElementById("texto4").style.height=null;
		document.getElementById("texto4velo").style.display=null;
		document.getElementById("bot4").style.opacity=null;
		setTimeout(scrolla6, 200);
	}
}
function showTexto5() {
	if (T5==1) {
		T5=2;
		document.getElementById("texto5").style.height="auto";
		document.getElementById("texto5velo").style.display="none";
		document.getElementById("bot5").style.opacity=".5";
	} else if (T5==2) {
		T5=1;
		document.getElementById("texto5").style.height=null;
		document.getElementById("texto5velo").style.display=null;
		document.getElementById("bot5").style.opacity=null;
		setTimeout(scrolla7, 200);
	}
}

function showTexto6() {
	if (T6==1) {
		T6=2;
		document.getElementById("texto6").style.height="auto";
		document.getElementById("texto6velo").style.display="none";
		document.getElementById("bot6").style.opacity=".5";
	} else if (T6==2) {
		T6=1;
		document.getElementById("texto6").style.height=null;
		document.getElementById("texto6velo").style.display=null;
		document.getElementById("bot6").style.opacity=null;
		setTimeout(scrolla8, 200);
	}
}

function showTexto7() {
	if (T7==1) {
		T7=2;
		document.getElementById("texto7").style.height="auto";
		document.getElementById("texto7velo").style.display="none";
		document.getElementById("bot7").style.opacity=".5";
	} else if (T7==2) {
		T7=1;
		document.getElementById("texto7").style.height=null;
		document.getElementById("texto7velo").style.display=null;
		document.getElementById("bot7").style.opacity=null;
		setTimeout(scrolla9, 200);
	}
}


