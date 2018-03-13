function Mostrar()
{
	var largo;
	var ancho;
	var alambre;
	var perimetro;

	largo=document.getElementById('alrgo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);
	
	perimetro=(largo+ancho)*2

	alambre=perimetro*3;

	document.write("se necesitan "+alambre+" metros de alambre");

}
