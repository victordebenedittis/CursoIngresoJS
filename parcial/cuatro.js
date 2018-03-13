function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var respuesta;

	numeroUno=prompt("ingrese el primer numero");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("ingrese el segundo numero");
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		respuesta=numeroUno*numeroDos;
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			respuesta=numeroUno-numeroDos;
		}
		else
		{
			respuesta=numeroUno+numeroDos;
		}
	}

	document.write(respuesta);
}
