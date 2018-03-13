function Mostrar()
{
	var dia;
	var respuesta;

	dia=prompt("ingrese un dia de la semana");


	switch(dia)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
		alert("a trabajar!!!");
		break;

		case "sabado":
		case "domingo":
		alert("es fin de semana");
		break;
	}
}
