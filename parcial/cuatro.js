function Mostrar()
/* ingresar dos numeros sin parsear 
si son iguales concateno
*/
{
	var numeroUno;
	var numeroDos;

	numeroUno=prompt("ingrese primero numero");
	numeroDos=prompt("ingrese segundo numero");

	if(numeroUno==numeroDos)
	{
		mensaje=numeroUno+numeroDos;
	}
	else
		{
			if(numeroUno>numeroDos)
			{
				mensaje=numeroUno-numeroDos;
			}

			else
			{
				mensaje=numeroUno*numeroDos;
			}

		}
	alert(mensaje);
}
