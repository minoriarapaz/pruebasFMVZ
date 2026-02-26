// JavaScript Document

let slideIndex = 1; /*1*/

/*showSlides(slideIndex);*/

function plusSlides(n) {
  showSlides(slideIndex += n);
	console.log("boton accion");
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let pagina = document.getElementById("Pliego");
	let siguiente = document.getElementById("siguiente");
	let anterior = document.getElementById("anterior");
	console.log("funcion show corre");
	
	if (n == 1) {
		pagina.style.marginLeft = "100%";
		anterior.style.display="none";
	}
	
	if (n == 2) {
		pagina.style.marginLeft = "0%";
		siguiente.style.visibility="visible";
		anterior.style.display="block";
	}
	
	if (n == 3) {
		pagina.style.marginLeft = "-100%";
	}
	if (n == 4) {
		pagina.style.marginLeft = "-200%";
	}
	if (n == 5) {
		pagina.style.marginLeft = "-300%";
	}
	if (n == 6) {
		pagina.style.marginLeft = "-400%";
		siguiente.style.visibility="visible";
	}
	if (n == 7) {
		pagina.style.marginLeft = "-500%";
		siguiente.style.visibility="hidden";
	}
}