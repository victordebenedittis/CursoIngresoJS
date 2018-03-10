function Mostrar()
/* ingresar horas de 0-24 12-20 "tarde de mate" 
20-6 "es de noche" 6-12 "mañana" si es de noche 
y son pasadas las 24 debo sumarle el mensaje 
"me voy a un bar" si es de mañana con una hora 
menor a 11 debemos sumar el msj "a desayunar"
*/
{
	var hora;

	hora=prompt("ingrese la hora");

	switch(hora)

	{
		
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
		alert("mañana");
		if(hora<11)
			{
				alert("a desayunar");
			}

		break;

		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
		case "20":
		alert("tarde de mate");
		break;

		case "20":
		case "21":
		case "22":
		case "23":
		case "24":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		alert("es de noche");
		if(hora<7)
		{
			alert("me voy a un bar");
		}
		break;



	

	}
}
