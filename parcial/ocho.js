function Mostrar()
{
	var respuesta="si";
	var numeros;
	var contador=0;
	var contadorNumerosPares=0;
	var promedio;
	var contadorNumeros;
	var numeoMaximo;
	var numeroMinimo;
	var acumuladorNumeros=0;

	while(respuesta!="no")
	{

		contador++

		numeros=prompt("ingrese un numero");
		numeros=parseInt(numeros);

		if(numeros<1)
		{
			numeros=prompt("error! ingrese solo numeros positivos");
			numeros=parseInt(numeros);
		}

		if(numeros%2==0)
		{
			contadorNumerosPares++
		}
		
		if(contador==1)
		{
			numeroMaximo=numeros;
			numeroMinimo=numeros;
		}
		if(numeros<numeroMinimo)
		{
			numeroMinimo=numeros;
		}

		if(numeros>numeroMaximo)
		{
			numeroMaximo=numeros;
		}
			
			acumuladorNumeros+=numeros;


			respuesta=prompt("ingrese no para dejar de cargar numeros");
	}

	promedio=acumuladorNumeros/contador;

	document.write("el promedio de todos los numeros ingresados es: "+promedio);
	document.write("la suma de todos los numeros es: "+acumuladorNumeros);
	document.write("el numero maximo es: "+numeroMaximo);
	document.write("el numero minimo es: "+numeroMinimo);



}
