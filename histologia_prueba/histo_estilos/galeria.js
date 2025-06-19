// JavaScript Document


let slideIndex = 1;//cerebelo,
let slideIndex2 = 1;//corazon,
let slideIndex3 = 1;//riñon,
let slideIndex4 = 1;//pancreas,
let slideIndex5 = 1;//vagina,
let slideIndex6 = 1;//testiculo,
let slideIndex7 = 1;//tiroides,
let slideIndex8 = 1;//bulbo,
let slideIndex9 = 1;//prostata,
let slideIndex10 = 1;//adrenal,
let slideIndex11 = 1;//bazo
let slideIndex12 = 1;//timo,
let slideIndex13 = 1;
let slideIndex14 = 1;
let slideIndex15 = 1;
let slideIndex16 = 1;
let slideIndex17 = 1;
let slideIndex18 = 1;
let slideIndex19 = 1;
let slideIndex20 = 1;
let slideIndex21 = 1;
let slideIndex22 = 1;
let slideIndex23 = 1;
let slideIndex24 = 1;
let slideIndex25 = 1;
let slideIndex26 = 1;
let slideIndex27 = 1;
let slideIndex28 = 1;
let slideIndex29 = 1;
let slideIndex30 = 1;
let slideIndex31 = 1;
let slideIndex32 = 1;
let slideIndex33 = 1;
let slideIndex34 = 1;

let slideIndexG1 = 1;
let slideIndexG2 = 1;
let slideIndexG3 = 1;
let slideIndexG4 = 1;
let slideIndexG5 = 1;



// GALERIA 1 cerebelo
function moverSlides1(N) {
  mostrarSlides(slideIndex += N);
}

function mostrarSlides(N) {
 let w;
	const laGaleria1 = document.getElementById("galeria1");
  let slides = laGaleria1.getElementsByClassName("mySlides");
  if (N > slides.length) {slideIndex = 1}
  if (N < 1) {slideIndex = slides.length}
  for (w = 0; w < slides.length; w++) {
    slides[w].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
	
	document.getElementById("cerebro-falsa").style.display="none";
	document.getElementById("numer1").innerHTML = slideIndex;
}

function openGaleria1(I) {
	const G = document.getElementById("galeria1");
	const Ima = G.getElementsByTagName("img");
	var direccion = Ima[I].src;
	window.open(direccion);
}


//funciones para galeria 2 CORAZON
function moverSlides2(N) {
  mostrarSlides2(slideIndex2 += N);
}
function mostrarSlides2(N) {
	let w;
	const laGaleria2 = document.getElementById("galeria2");
	let slides = laGaleria2.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex2 = 1}
	if (N < 1) {slideIndex2 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex2-1].style.display = "block";

	document.getElementById("cerebelo-falsa").style.display="none";
	document.getElementById("numer2").innerHTML = slideIndex2;
}
function openGaleria2(I) {
	let G = document.getElementById("galeria2");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 3 riñon
function moverSlides3(N) {
  mostrarSlides3(slideIndex3 += N);
}
function mostrarSlides3(N) {
	let w;
	const laGaleria3 = document.getElementById("galeria3");
	let slides = laGaleria3.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex3 = 1}
	if (N < 1) {slideIndex3 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex3-1].style.display = "block";
	document.getElementById("corazon-falsa").style.display="none";
	document.getElementById("numer3").innerHTML = slideIndex3;
}
function openGaleria3(I) {
	let G = document.getElementById("galeria3");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 4
function moverSlides4(N) {
  mostrarSlides4(slideIndex4 += N);
}
function mostrarSlides4(N) {
	let w;
	const laGaleria4 = document.getElementById("galeria4");
	let slides = laGaleria4.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex4 = 1}
	if (N < 1) {slideIndex4 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex4-1].style.display = "block";
	document.getElementById("lengua-falsa").style.display="none";
	document.getElementById("numer4").innerHTML = slideIndex4;
}
function openGaleria4(I) {
	let G = document.getElementById("galeria4");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 5
function moverSlides5(N) {
  mostrarSlides5(slideIndex5 += N);
}
function mostrarSlides5(N) {
	let w;
	const laGaleria5 = document.getElementById("galeria5");
	let slides = laGaleria5.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex5 = 1}
	if (N < 1) {slideIndex5 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex5-1].style.display = "block";
	document.getElementById("numer5").innerHTML = slideIndex5;
	document.getElementById("esofago-falsa").style.display="none";
}
function openGaleria5(I) {
	let G = document.getElementById("galeria5");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 6
function moverSlides6(N) {
  mostrarSlides6(slideIndex6 += N);
}
function mostrarSlides6(N) {
	let w;
	const laGaleria6 = document.getElementById("galeria6");
	let slides = laGaleria6.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex6 = 1}
	if (N < 1) {slideIndex6 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex6-1].style.display = "block";

	document.getElementById("ciego-falsa").style.display="none";
	document.getElementById("numer6").innerHTML = slideIndex6;
}
function openGaleria6(I) {
	let G = document.getElementById("galeria6");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria G1
function moverSlidesG1(N) {
  mostrarSlidesG1(slideIndexG1 += N);
}
function mostrarSlidesG1(N) {
	let w;
	const laGaleriaG1 = document.getElementById("galeriaG1");
	let slides = laGaleriaG1.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndexG1 = 1}
	if (N < 1) {slideIndexG1 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndexG1-1].style.display = "block";

	document.getElementById("colon-falsa").style.display="none";
	document.getElementById("numerG1").innerHTML = slideIndexG1;
}
function openGaleriaG1(I) {
	let G = document.getElementById("galeriaG1");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria G2
function moverSlidesG2(N) {
  mostrarSlidesG2(slideIndexG2 += N);
}
function mostrarSlidesG2(N) {
	let w;
	const laGaleriaG2 = document.getElementById("galeriaG2");
	let slides = laGaleriaG2.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndexG2 = 1}
	if (N < 1) {slideIndexG2 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndexG2-1].style.display = "block";

	document.getElementById("recto-falsa").style.display="none";
	document.getElementById("numerG2").innerHTML = slideIndexG2;
}
function openGaleriaG2(I) {
	let G = document.getElementById("galeriaG2");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria G3
function moverSlidesG3(N) {
  mostrarSlidesG3(slideIndexG3 += N);
}
function mostrarSlidesG3(N) {
	let w;
	const laGaleriaG3 = document.getElementById("galeriaG3");
	let slides = laGaleriaG3.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndexG3 = 1}
	if (N < 1) {slideIndexG3 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndexG3-1].style.display = "block";

	document.getElementById("ano-falsa").style.display="none";
	document.getElementById("numerG3").innerHTML = slideIndexG3;
}
function openGaleriaG3(I) {
	let G = document.getElementById("galeriaG3");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria G4
function moverSlidesG4(N) {
  mostrarSlidesG4(slideIndexG4 += N);
}
function mostrarSlidesG4(N) {
	let w;
	const laGaleriaG4 = document.getElementById("galeriaG4");
	let slides = laGaleriaG4.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndexG4 = 1}
	if (N < 1) {slideIndexG4 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndexG4-1].style.display = "block";

	document.getElementById("mesenterico-falsa").style.display="none";
	document.getElementById("numerG4").innerHTML = slideIndexG4;
}
function openGaleriaG4(I) {
	let G = document.getElementById("galeriaG4");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria G5
function moverSlidesG5(N) {
  mostrarSlidesG5(slideIndexG5 += N);
}
function mostrarSlidesG5(N) {
	let w;
	const laGaleriaG5 = document.getElementById("galeriaG5");
	let slides = laGaleriaG5.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndexG5 = 1}
	if (N < 1) {slideIndexG5 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndexG5-1].style.display = "block";

	document.getElementById("diverticulo-falsa").style.display="none";
	document.getElementById("numerG5").innerHTML = slideIndexG5;
}
function openGaleriaG5(I) {
	let G = document.getElementById("galeriaG5");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 7
function moverSlides7(N) {
  mostrarSlides7(slideIndex7 += N);
}
function mostrarSlides7(N) {
	let w;
	const laGaleria7 = document.getElementById("galeria7");
	let slides = laGaleria7.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex7 = 1}
	if (N < 1) {slideIndex7 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex7-1].style.display = "block";

	document.getElementById("higado-falsa").style.display="none";
	document.getElementById("numer7").innerHTML = slideIndex7;
}
function openGaleria7(I) {
	let G = document.getElementById("galeria7");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 8
function moverSlides8(N) {
  mostrarSlides8(slideIndex8 += N);
}
function mostrarSlides8(N) {
	let w;
	const laGaleria8 = document.getElementById("galeria8");
	let slides = laGaleria8.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex8 = 1}
	if (N < 1) {slideIndex8 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex8-1].style.display = "block";

	document.getElementById("pancreas-falsa").style.display="none";
	document.getElementById("numer8").innerHTML = slideIndex8;
}
function openGaleria8(I) {
	let G = document.getElementById("galeria8");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 9
function moverSlides9(N) {
  mostrarSlides9(slideIndex9 += N);
}
function mostrarSlides9(N) {
	let w;
	const laGaleria9 = document.getElementById("galeria9");
	let slides = laGaleria9.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex9 = 1}
	if (N < 1) {slideIndex9 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex9-1].style.display = "block";

	document.getElementById("rinon-falsa").style.display="none";
	document.getElementById("numer9").innerHTML = slideIndex9;
}
function openGaleria9(I) {
	let G = document.getElementById("galeria9");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 10
function moverSlides10(N) {
  mostrarSlides10(slideIndex10 += N);
}
function mostrarSlides10(N) {
	let w;
	const laGaleria10 = document.getElementById("galeria10");
	let slides = laGaleria10.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex10 = 1}
	if (N < 1) {slideIndex10 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex10-1].style.display = "block";

	document.getElementById("ureter-falsa").style.display="none";
	document.getElementById("numer10").innerHTML = slideIndex10;
}
function openGaleria10(I) {
	let G = document.getElementById("galeria10");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 11
function moverSlides11(N) {
  mostrarSlides11(slideIndex11 += N);
}
function mostrarSlides11(N) {
	let w;
	const laGaleria11 = document.getElementById("galeria11");
	let slides = laGaleria11.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex11 = 1}
	if (N < 1) {slideIndex11 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex11-1].style.display = "block";

	document.getElementById("uretra-falsa").style.display="none";
	document.getElementById("numer11").innerHTML = slideIndex11;
}
function openGaleria11(I) {
	let G = document.getElementById("galeria11");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}


//funciones para galeria 12
function moverSlides12(N) {
  mostrarSlides12(slideIndex12 += N);
}
function mostrarSlides12(N) {
	let w;
	const laGaleria12 = document.getElementById("galeria12");
	let slides = laGaleria12.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex12 = 1}
	if (N < 1) {slideIndex12 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex12-1].style.display = "block";

	document.getElementById("vejiga-falsa").style.display="none";
	document.getElementById("numer12").innerHTML = slideIndex12;
}
function openGaleria12(I) {
	let G = document.getElementById("galeria12");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 13
function moverSlides13(N) {
  mostrarSlides13(slideIndex13 += N);
}
function mostrarSlides13(N) {
	let w;
	const laGaleria13 = document.getElementById("galeria13");
	let slides = laGaleria13.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex13 = 1}
	if (N < 1) {slideIndex13 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex13-1].style.display = "block";

	document.getElementById("vulva-falsa").style.display="none";
	document.getElementById("numer13").innerHTML = slideIndex13;
}
function openGaleria13(I) {
	let G = document.getElementById("galeria13");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 14
function moverSlides14(N) {
  mostrarSlides14(slideIndex14 += N);
}
function mostrarSlides14(N) {
	let w;
	const laGaleria14 = document.getElementById("galeria14");
	let slides = laGaleria14.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex14 = 1}
	if (N < 1) {slideIndex14 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex14-1].style.display = "block";
	document.getElementById("vagina-falsa").style.display="none";
	document.getElementById("numer14").innerHTML = slideIndex14;
}
function openGaleria14(I) {
	let G = document.getElementById("galeria14");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 15
function moverSlides15(N) {
  mostrarSlides15(slideIndex15 += N);
}
function mostrarSlides15(N) {
	let w;
	const laGaleria15 = document.getElementById("galeria15");
	let slides = laGaleria15.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex15 = 1}
	if (N < 1) {slideIndex15 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex15-1].style.display = "block";

	document.getElementById("cervix-falsa").style.display="none";
	document.getElementById("numer15").innerHTML = slideIndex15;
}
function openGaleria15(I) {
	let G = document.getElementById("galeria15");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 16
function moverSlides16(N) {
  mostrarSlides16(slideIndex16 += N);
}
function mostrarSlides16(N) {
	let w;
	const laGaleria16 = document.getElementById("galeria16");
	let slides = laGaleria16.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex16 = 1}
	if (N < 1) {slideIndex16 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex16-1].style.display = "block";

	document.getElementById("utero-falsa").style.display="none";
	document.getElementById("numer16").innerHTML = slideIndex16;
}
function openGaleria16(I) {
	let G = document.getElementById("galeria16");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 17
function moverSlides17(N) {
  mostrarSlides17(slideIndex17 += N);
}
function mostrarSlides17(N) {
	let w;
	const laGaleria17 = document.getElementById("galeria17");
	let slides = laGaleria17.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex17 = 1}
	if (N < 1) {slideIndex17 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex17-1].style.display = "block";

	document.getElementById("tuba-falsa").style.display="none";
	document.getElementById("numer17").innerHTML = slideIndex17;
}
function openGaleria17(I) {
	let G = document.getElementById("galeria17");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 18
function moverSlides18(N) {
  mostrarSlides18(slideIndex18 += N);
}
function mostrarSlides18(N) {
	let w;
	const laGaleria18 = document.getElementById("galeria18");
	let slides = laGaleria18.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex18 = 1}
	if (N < 1) {slideIndex18 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex18-1].style.display = "block";

	document.getElementById("ovario-falsa").style.display="none";
	document.getElementById("numer18").innerHTML = slideIndex18;
}
function openGaleria18(I) {
	let G = document.getElementById("galeria18");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 19
function moverSlides19(N) {
  mostrarSlides19(slideIndex19 += N);
}
function mostrarSlides19(N) {
	let w;
	const laGaleria19 = document.getElementById("galeria19");
	let slides = laGaleria19.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex19 = 1}
	if (N < 1) {slideIndex19 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex19-1].style.display = "block";

	document.getElementById("testiculo-falsa").style.display="none";
	document.getElementById("numer19").innerHTML = slideIndex19;
}
function openGaleria19(I) {
	let G = document.getElementById("galeria19");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 20
function moverSlides20(N) {
  mostrarSlides20(slideIndex20 += N);
}
function mostrarSlides20(N) {
	let w;
	const laGaleria20 = document.getElementById("galeria20");
	let slides = laGaleria20.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex20 = 1}
	if (N < 1) {slideIndex20 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex20-1].style.display = "block";

	document.getElementById("epididimo-falsa").style.display="none";
	document.getElementById("numer20").innerHTML = slideIndex20;
}
function openGaleria20(I) {
	let G = document.getElementById("galeria20");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 21
function moverSlides21(N) {
  mostrarSlides21(slideIndex21 += N);
}
function mostrarSlides21(N) {
	let w;
	const laGaleria21 = document.getElementById("galeria21");
	let slides = laGaleria21.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex21 = 1}
	if (N < 1) {slideIndex21 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex21-1].style.display = "block";

	document.getElementById("pene-falsa").style.display="none";
	document.getElementById("numer21").innerHTML = slideIndex21;
}
function openGaleria21(I) {
	let G = document.getElementById("galeria21");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 22
function moverSlides22(N) {
  mostrarSlides22(slideIndex22 += N);
}
function mostrarSlides22(N) {
	let w;
	const laGaleria22 = document.getElementById("galeria22");
	let slides = laGaleria22.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex22 = 1}
	if (N < 1) {slideIndex22 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex22-1].style.display = "block";

	document.getElementById("vesiculas-falsa").style.display="none";
	document.getElementById("numer22").innerHTML = slideIndex22;
}
function openGaleria22(I) {
	let G = document.getElementById("galeria22");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}
//desde aqui simplificaste la cuenta de imagenes




//funciones para galeria 23
function moverSlides23(N) {
  mostrarSlides23(slideIndex23 += N);
}
function mostrarSlides23(N) {
	let w;
	const laGaleria23 = document.getElementById("galeria23");
	let slides = laGaleria23.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex23 = 1}
	if (N < 1) {slideIndex23 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex23-1].style.display = "block";

	document.getElementById("bulbo-falsa").style.display="none";
	document.getElementById("numer23").innerHTML = slideIndex23;

}
function openGaleria23(I) {
	let G = document.getElementById("galeria23");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}


//funciones para galeria 24
function moverSlides24(N) {
  mostrarSlides24(slideIndex24 += N);
}
function mostrarSlides24(N) {
	let w;
	const laGaleria24 = document.getElementById("galeria24");
	let slides = laGaleria24.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex24 = 1}
	if (N < 1) {slideIndex24 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex24-1].style.display = "block";

	document.getElementById("prostata-falsa").style.display="none";
	document.getElementById("numer24").innerHTML = slideIndex24;

}
function openGaleria24(I) {
	let G = document.getElementById("galeria24");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 25
function moverSlides25(N) {
  mostrarSlides25(slideIndex25 += N);
}
function mostrarSlides25(N) {
	let w;
	const laGaleria25 = document.getElementById("galeria25");
	let slides = laGaleria25.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex25 = 1}
	if (N < 1) {slideIndex25 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex25-1].style.display = "block";

	document.getElementById("tiroides-falsa").style.display="none";
	document.getElementById("numer25").innerHTML = slideIndex25;

}
function openGaleria25(I) {
	let G = document.getElementById("galeria25");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 26
function moverSlides26(N) {
  mostrarSlides26(slideIndex26 += N);
}
function mostrarSlides26(N) {
	let w;
	const laGaleria26 = document.getElementById("galeria26");
	let slides = laGaleria26.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex26 = 1}
	if (N < 1) {slideIndex26 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex26-1].style.display = "block";

	document.getElementById("adrenal-falsa").style.display="none";
	document.getElementById("numer26").innerHTML = slideIndex26;

}
function openGaleria26(I) {
	let G = document.getElementById("galeria26");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 27
function moverSlides27(N) {
  mostrarSlides27(slideIndex27 += N);
}
function mostrarSlides27(N) {
	let w;
	const laGaleria27 = document.getElementById("galeria27");
	let slides = laGaleria27.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex27 = 1}
	if (N < 1) {slideIndex27 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex27-1].style.display = "block";

	document.getElementById("bazo-falsa").style.display="none";
	document.getElementById("numer27").innerHTML = slideIndex27;

}
function openGaleria27(I) {
	let G = document.getElementById("galeria27");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}


//funciones para galeria 28
function moverSlides28(N) {
  mostrarSlides28(slideIndex28 += N);
}
function mostrarSlides28(N) {
	let w;
	const laGaleria28 = document.getElementById("galeria28");
	let slides = laGaleria28.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex28 = 1}
	if (N < 1) {slideIndex28 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex28-1].style.display = "block";

	document.getElementById("timo-falsa").style.display="none";
	document.getElementById("numer28").innerHTML = slideIndex28;

}
function openGaleria28(I) {
	let G = document.getElementById("galeria28");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 29
function moverSlides29(N) {
  mostrarSlides29(slideIndex29 += N);
}
function mostrarSlides29(N) {
	let w;
	const laGaleria29 = document.getElementById("galeria29");
	let slides = laGaleria29.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex29 = 1}
	if (N < 1) {slideIndex29 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex29-1].style.display = "block";

	document.getElementById("piel-falsa").style.display="none";
	document.getElementById("numer29").innerHTML = slideIndex29;

}
function openGaleria29(I) {
	let G = document.getElementById("galeria29");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 30
function moverSlides30(N) {
  mostrarSlides30(slideIndex30 += N);
}
function mostrarSlides30(N) {
	let w;
	const laGaleria30 = document.getElementById("galeria30");
	let slides = laGaleria30.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex30 = 1}
	if (N < 1) {slideIndex30 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex30-1].style.display = "block";

	document.getElementById("lomo-falsa").style.display="none";
	document.getElementById("numer30").innerHTML = slideIndex30;

}
function openGaleria30(I) {
	let G = document.getElementById("galeria30");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 31
function moverSlides31(N) {
  mostrarSlides31(slideIndex31 += N);
}
function mostrarSlides31(N) {
	let w;
	const laGaleria31 = document.getElementById("galeria31");
	let slides = laGaleria31.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex31 = 1}
	if (N < 1) {slideIndex31 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex31-1].style.display = "block";

	document.getElementById("pierna-falsa").style.display="none";
	document.getElementById("numer31").innerHTML = slideIndex31;

}
function openGaleria31(I) {
	let G = document.getElementById("galeria31");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 32
function moverSlides32(N) {
  mostrarSlides32(slideIndex32 += N);
}
function mostrarSlides32(N) {
	let w;
	const laGaleria32 = document.getElementById("galeria32");
	let slides = laGaleria32.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex32 = 1}
	if (N < 1) {slideIndex32 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex32-1].style.display = "block";

	document.getElementById("traquea-falsa").style.display="none";
	document.getElementById("numer32").innerHTML = slideIndex32;

}
function openGaleria32(I) {
	let G = document.getElementById("galeria32");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 33
function moverSlides33(N) {
  mostrarSlides33(slideIndex33 += N);
}
function mostrarSlides33(N) {
	let w;
	const laGaleria33 = document.getElementById("galeria33");
	let slides = laGaleria33.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex33 = 1}
	if (N < 1) {slideIndex33 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex33-1].style.display = "block";

	document.getElementById("pulmon-falsa").style.display="none";
	document.getElementById("numer33").innerHTML = slideIndex33;

}
function openGaleria33(I) {
	let G = document.getElementById("galeria33");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 34
function moverSlides34(N) {
  mostrarSlides34(slideIndex34 += N);
}
function mostrarSlides34(N) {
	let w;
	const laGaleria34 = document.getElementById("galeria34");
	let slides = laGaleria34.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex34 = 1}
	if (N < 1) {slideIndex34 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex34-1].style.display = "block";

	document.getElementById("ojo-falsa").style.display="none";
	document.getElementById("numer34").innerHTML = slideIndex34;

}
function openGaleria34(I) {
	let G = document.getElementById("galeria34");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 35
function moverSlides35(N) {
  mostrarSlides35(slideIndex35 += N);
}
function mostrarSlides35(N) {
	let w;
	const laGaleria35 = document.getElementById("galeria35");
	let slides = laGaleria35.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex35 = 1}
	if (N < 1) {slideIndex35 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex35-1].style.display = "block";

	document.getElementById("oviducto-falsa").style.display="none";
	document.getElementById("numer35").innerHTML = slideIndex35;

}
function openGaleria35(I) {
	let G = document.getElementById("galeria35");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 36
function moverSlides36(N) {
  mostrarSlides36(slideIndex36 += N);
}
function mostrarSlides36(N) {
	let w;
	const laGaleria36 = document.getElementById("galeria36");
	let slides = laGaleria36.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex36 = 1}
	if (N < 1) {slideIndex36 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex36-1].style.display = "block";

	document.getElementById("ovario-falsa").style.display="none";
	document.getElementById("numer36").innerHTML = slideIndex36;

}
function openGaleria36(I) {
	let G = document.getElementById("galeria36");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 37
function moverSlides37(N) {
  mostrarSlides37(slideIndex37 += N);
}
function mostrarSlides37(N) {
	let w;
	const laGaleria37 = document.getElementById("galeria37");
	let slides = laGaleria37.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex37 = 1}
	if (N < 1) {slideIndex37 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex37-1].style.display = "block";

	document.getElementById("epi-falsa").style.display="none";
	document.getElementById("numer37").innerHTML = slideIndex37;

}
function openGaleria37(I) {
	let G = document.getElementById("galeria37");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 38
function moverSlides38(N) {
  mostrarSlides38(slideIndex38 += N);
}
function mostrarSlides38(N) {
	let w;
	const laGaleria38 = document.getElementById("galeria38");
	let slides = laGaleria38.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex38 = 1}
	if (N < 1) {slideIndex38 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex38-1].style.display = "block";

	document.getElementById("vesicula-falsa").style.display="none";
	document.getElementById("numer38").innerHTML = slideIndex38;

}
function openGaleria38(I) {
	let G = document.getElementById("galeria38");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 39
function moverSlides39(N) {
  mostrarSlides39(slideIndex39 += N);
}
function mostrarSlides39(N) {
	let w;
	const laGaleria39 = document.getElementById("galeria39");
	let slides = laGaleria39.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex39 = 1}
	if (N < 1) {slideIndex39 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex39-1].style.display = "block";

	document.getElementById("piel-falsa").style.display="none";
	document.getElementById("numer39").innerHTML = slideIndex39;

}
function openGaleria39(I) {
	let G = document.getElementById("galeria39");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}

//funciones para galeria 40
function moverSlides40(N) {
  mostrarSlides40(slideIndex40 += N);
}
function mostrarSlides40(N) {
	let w;
	const laGaleria40 = document.getElementById("galeria40");
	let slides = laGaleria40.getElementsByClassName("mySlides");
	if (N > slides.length) {slideIndex40 = 1}
	if (N < 1) {slideIndex40 = slides.length}
	for (w = 0; w < slides.length; w++) {
		slides[w].style.display = "none";
	}
	slides[slideIndex40-1].style.display = "block";

	document.getElementById("pulmon-falsa").style.display="none";
	document.getElementById("numer40").innerHTML = slideIndex40;

}
function openGaleria40(I) {
	let G = document.getElementById("galeria40");
	let Ima = G.getElementsByTagName("img");
	let direccion = Ima[I].src;
	window.open(direccion);
}
