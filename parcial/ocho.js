function Mostrar()
/* 
*/
{
	var contador=0;
	var respuesta="continuar";
	var temperatura;


	while(respuesta!="no")
	 {         //inicio llave while
	
		temperatura=prompt("ingrese temperatura");	
		temperatura=parseInt(temperatura);
		
		while(temperatura<-100 || temperatura>100 || IsNAN)
		{
			respuesta=prompt("ingrese una temperatura valida");
			temperatura=parseInt(temperatura);

		}		







	}                         //fin llave while


}
