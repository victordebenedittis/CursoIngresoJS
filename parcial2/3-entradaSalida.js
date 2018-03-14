//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var alambrado;

	largo=document.getElementById('largo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);

	perimetro=(largo+ancho)*2;

	alambrado=perimetro*6;

	alert("se necesitan "+alambrado+" de alambrado");


}

