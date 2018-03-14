//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var iva=1.21;
	var importeMasIva;

	importe=prompt("ingrese el importe");
	importe=parseInt(importe);

	importeMasIva=importe*iva;

	alert("el importe mas iva es: "+importeMasIva);
	
}

