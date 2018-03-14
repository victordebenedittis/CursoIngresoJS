//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var notas;
	var sexo;
	var promedio;
	var notaMasBaja;
	var notaMasALta;
	var contador=0;
	var contadorm=0;
	var acumuladorNotas=0;

	while(contador<6)
	{
		contador++


		notas=prompt("ingrese la nota del alumno");
		notas=parseInt(notas);

		if(notas<0 || notas>10)
		{
			notas=prompt("ingrese una nota entre 0 y 10")
			notas=parseInt(notas);
		}


		if(contador==1)
		{
			notaMasBaja=notas;
			notaMasALta=notas;
		}
		if(notas<notaMasBaja)
		{
			notaMasBaja=notas;
		}
		if(notas>notaMasALta)
		{
			notaMasALta=notas;
		}


		
		sexo=prompt("ingrese el sexo del alumno")
		if(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingrese un sexo con f o m");
		}

		if(sexo="m" && notas>=6)
		{
			contadorm++
		}

		acumuladorNotas+=notas



	}

	promedio=acumuladorNotas/contador;

	alert("el promedio de las notas es: "+promedio);
	alert("la nota mas baja es: "+notaMasBaja);
	alert("la cantidad de varones cuya nota es mayor o igual a 6 es: "+contadorm);


	
}

