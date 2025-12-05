// JavaScript Document



const Fuentes = document.getElementsByClassName("Citado");

function contarFuentes() {
	let Zaiss = Fuentes[87].innerHTML;
	alert(Fuentes.length+" ----la fuente num. 87 (ultima) es "+Zaiss);
}
function mostrarBiblio() {
	document.getElementById("Bibliografia").style.display="block";
	document.body.style.overflow = "hidden";
}

function animar() {
		document.getElementById("Bibliografia").style.opacity="1";
		document.getElementById("Citas").style.scale="1";
		console.log("animó");
	}

function citar(A, B, C, D, E, F) {
	setTimeout(animar, 10);
	mostrarBiblio();
	Fuentes[A].style.display="block";
	/*document.getElementById("Bibliografia").style.paddingTop="200px";*/
	function restarPadding() {document.getElementById("Bibliografia").style.paddingTop="20px";}
	
	if (B === undefined) {B = null; console.log("no hay 2a cita");} else {Fuentes[B].style.display="block";}
	
	if (C === undefined)
	{C = null; console.log("no hay 3a cita");} else {Fuentes[C].style.display="block";}
	
	if (D === undefined)
	{D = null; console.log("no hay 4a cita");} else {Fuentes[D].style.display="block"; restarPadding();}
	
	if (E === undefined)
	{E = null; console.log("ni 5a cita");} else {Fuentes[E].style.display="block"; restarPadding();}
	
	if (F === undefined)
		{F = null; console.log("ni 6a");} else {Fuentes[F].style.display="block"; restarPadding();}
}


/*function citarEspecial() {
	setTimeout(animar, 10);
	mostrarBiblio();
	Fuentes[5].style.display="block";
	Fuentes[8].style.display="block";
	Fuentes[9].style.display="block";
	Fuentes[10].style.display="block";
	Fuentes[11].style.display="block";
	Fuentes[12].style.display="block";
	document.getElementById("Bibliografia").style.paddingTop="20px";
}*/

function NoDisplay() {
	document.getElementById("Bibliografia").style.display="none";
}
function salirBiblio() {
	setTimeout(NoDisplay, 300);
	document.getElementById("Citas").style.scale=null;
	document.getElementById("Bibliografia").style.opacity="0";
	document.getElementById("Bibliografia").style.paddingTop="200px";
	document.body.style.overflow = "auto";
	Fuentes[0].style.display="none";
	Fuentes[1].style.display="none";
	Fuentes[2].style.display="none";
	Fuentes[3].style.display="none";
	Fuentes[4].style.display="none";
	Fuentes[5].style.display="none";
	Fuentes[6].style.display="none";
	Fuentes[7].style.display="none";
	Fuentes[8].style.display="none";
	Fuentes[9].style.display="none";
	Fuentes[10].style.display="none";
	Fuentes[11].style.display="none";
	Fuentes[12].style.display="none";
	Fuentes[13].style.display="none";
	Fuentes[14].style.display="none";
	Fuentes[15].style.display="none";
	Fuentes[16].style.display="none";
	Fuentes[17].style.display="none";
	Fuentes[18].style.display="none";
	Fuentes[19].style.display="none";
	Fuentes[20].style.display="none";
	Fuentes[21].style.display="none";
	Fuentes[22].style.display="none";
	Fuentes[23].style.display="none";
	Fuentes[24].style.display="none";
	Fuentes[25].style.display="none";
	Fuentes[26].style.display="none";
	Fuentes[27].style.display="none";
	Fuentes[28].style.display="none";
	Fuentes[29].style.display="none";
	Fuentes[30].style.display="none";
	Fuentes[31].style.display="none";
	Fuentes[32].style.display="none";
	Fuentes[33].style.display="none";
	Fuentes[34].style.display="none";
	Fuentes[35].style.display="none";
	Fuentes[36].style.display="none";
	Fuentes[37].style.display="none";
	Fuentes[38].style.display="none";
	Fuentes[39].style.display="none";
	Fuentes[40].style.display="none";
	Fuentes[41].style.display="none";
	Fuentes[42].style.display="none";
	Fuentes[43].style.display="none";
	Fuentes[44].style.display="none";
	Fuentes[45].style.display="none";
	Fuentes[46].style.display="none";
	Fuentes[47].style.display="none";
	Fuentes[48].style.display="none";
	Fuentes[49].style.display="none";
	Fuentes[50].style.display="none";
	Fuentes[51].style.display="none";
	Fuentes[52].style.display="none";
	Fuentes[53].style.display="none";
	Fuentes[54].style.display="none";
	Fuentes[55].style.display="none";
	Fuentes[56].style.display="none";
	Fuentes[57].style.display="none";
	Fuentes[58].style.display="none";
	Fuentes[59].style.display="none";
	Fuentes[60].style.display="none";
	
	Fuentes[61].style.display="none";
	Fuentes[62].style.display="none";
	Fuentes[63].style.display="none";
	Fuentes[64].style.display="none";
	Fuentes[65].style.display="none";
	Fuentes[66].style.display="none";
	Fuentes[67].style.display="none";
	Fuentes[68].style.display="none";
	Fuentes[69].style.display="none";
	Fuentes[70].style.display="none";
	
	Fuentes[71].style.display="none";
	Fuentes[72].style.display="none";
	Fuentes[73].style.display="none";
	Fuentes[74].style.display="none";
	Fuentes[75].style.display="none";
	Fuentes[76].style.display="none";
	Fuentes[77].style.display="none";
	Fuentes[78].style.display="none";
	Fuentes[79].style.display="none";
	Fuentes[80].style.display="none";
	
	Fuentes[81].style.display="none";
	Fuentes[82].style.display="none";
	Fuentes[83].style.display="none";
	Fuentes[84].style.display="none";
	Fuentes[85].style.display="none";
	Fuentes[86].style.display="none";
	Fuentes[87].style.display="none";

}
