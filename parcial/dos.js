function Mostrar()
{
	  var importe;
	  var iva=1.21;
	  var importeIva;

	  importe=prompt("ingrese su importe");

	  importeIva=importe*iva;

	  document.getElementById('importeFinal').value=importeIva;


}
