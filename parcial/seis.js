function Mostrar()
{
	var importe;
	var contador=0;
	var mayorImporte;
	var menorImporte;

	while(contador<24)
	{
		contador++

		importe=prompt("ingrese su importe")
		importe=parseInt(importe);
		if(importe<0)
		{
			importe=prompt("error! ingrese un importe mayor a 0");
			importe=parseInt(importe);

		}
		if(contador==1)
		{
			mayorImporte=importe;
			menorImporte=importe;
		}
		if(importe>mayorImporte)
		{
			mayorImporte=importe;
		}
		if(importe<menorImporte)
		{
			menorImporte=importe;
		}

		
	}
  		alert("su mayor importe fue: "+mayorImporte);
		alert("su menorImporte fue: "+menorImporte);

}
