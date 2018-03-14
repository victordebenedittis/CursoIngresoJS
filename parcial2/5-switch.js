//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes;
	var respuesta;

	mes=prompt("ingrese un mes del año");

	switch(mes)
	{
		

		case "enero":
		case "febrero":
		respuesta=("veranito!!!!");
		break;

		case "marzo":
		case "abril":
		case "mayo":
		case "junio":
		case "julio":
		case "agosto":
		case "septiembre":
		case "octubre":
		case "noviembre":
		case "diciembre":
			respuesta=("extraño enero y febrero!!!");
		
		
		break;

			default:
			mes
	}
		


	alert(respuesta);
	
}

