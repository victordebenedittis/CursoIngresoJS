//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeros;
	var promedio;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta="si";
	var contador=0;
	var contadorPares=0;
	var acumuladorNumeros=0;


	while(respuesta!="no")
	{
		contador++

		numeros=prompt("ingrese un numero");
		numeros=parseInt(numeros);

		
		if(numeros<0)
		{
			numeros=prompt("ingrese solo numeros positivos");
			numeros=parseInt(numeros);
		}

		
		if(numeros%2==0)
		{
			contadorPares++
		}

		

		if(contador==1)
		{
			numeroMinimo=numeros;
			numeroMaximo=numeros;
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

			respuesta=prompt("ingrese no para dejar de ingresar numeros");
	}

	    promedio=acumuladorNumeros/contador;

	alert("la cantidad de numeros pares es: "+contadorPares);
	alert("el promedio de los numeros ingresados es: "+promedio);
	alert("la suma de todos los numeros es: "+acumuladorNumeros);
	alert("el numero maximo es: "+numeroMaximo+ " y el numero minimo es: "+numeroMinimo);
	
}











	
