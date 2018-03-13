function Mostrar()
{
	var notas;
	var contador=0;
	var sexo;
	var promedio;
	var notaMasBaja;
	var contadorm=0;
	var acumuladorNotas=0;
	var notaMasBaja;


	while(contador<5)
	{
		contador++

		notas=prompt("ingrese la nota del alumno");
		notas=parseInt(notas);

		if(notas<0 || notas>10)
		{
			notas=("error! ingrese una nota entre 0 y 10");
			notas=parseInt(notas);
		}

		sexo=prompt("ingrese el sexo del alumno");
		
		if(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingrese un sexo con f o m");
		}

		if(sexo=="m" && notas>=6)
		{
			contadorm++
		}

		if(contador==1)
		{
			notaMasBaja=notas;
		}
		if(notas<notaMasBaja)
		{
			notaMasBaja=notas;
		}

			acumuladorNotas+=notas;
	}

	promedio=acumuladorNotas/contador;

	alert("el promedio de las notas totales es: "+promedio);
	alert("la nota mas baja es: "+notaMasBaja);
	alert("la cantidad de varones que su nota haya sido mayor o igual a 6 es: "+contadorm);



}
