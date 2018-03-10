function Mostrar()
/*
	perimetro de un rectangulo
*/
{
	/*var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo=document.getElementById('alrgo').value;
	ancho=document.getElementById('ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);


	perimetro=(largo+ancho)*2;

	alambre=perimetro*6;

	document.write(perimetro);*/

	var precio;
	var porcentaje;
	var precioFinal;
	var descuento;
	var iva=1.21;
	var resultado;

	precio=document.getElementById('alrgo').value;
	porcentaje=document.getElementById('ancho').value;

	precio=parseInt(precio);
	porcentaje=parseInt(porcentaje);

	descuento=(precio*porcentaje)/100;

	precioFinal=precio-descuento;

	resultado=precioFinal*iva;

	alert("su descuento + iva es "+resultado);

	

	









	
}
