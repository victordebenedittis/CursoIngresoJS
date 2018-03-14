//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var contador=0;
	var mayorImporte;
	var menorImporte;


	while(contador<7)
	{
		contador++

		importe=prompt("ingrese su importe");
		importe=parseInt(importe);

		if(importe<1)
		{
			importe=prompt("ingrese un importe mayor a 0");
			importe=parseInt(importe);
		}

		if(contador==1)
		{
			mayorImporte=importe;
			menorImporte=importe;
		}
		if(importe<menorImporte)
		{
			menorImporte=importe;
		}
		if(importe>mayorImporte)
		{
			mayorImporte=importe;
		}

	}
	
	alert("el mayor importe fue: "+mayorImporte);
	alert("el menor importe fue: "+menorImporte);
}

