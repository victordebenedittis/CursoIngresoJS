//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var respuesta;

	numeroUno=prompt("ingrese el primero numero");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("ingrese el siguiente numero");
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

