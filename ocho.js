/*
 ingreso de alumnos nose cuantos alumnos hay, pedimos 
 nombre cuantos alumnos ingrese, rta se ingresaron 
 "x" alumnos.

*/
//1 cantidad 2 promedio total 3 cantidad de mujeres 
//4 cantidad de varones 5 cantidad de varones desaprobados
// 6 nombre de la mejor nota 7 promedio de las mujeres 
// 8 sexo de la menor edad 9 promedio de las edaddes de los aprobados
// 10 cantidad de notas pares

function Mostrar()

{
	var alumnos;
	var respuesta="si";
	var contador=0;
	var continuar="no";
	var notas;
	var promedio;
	var acumulador= 0;
	
	
	
	
	while(respuesta != "no")
	{

		alumnos=prompt("ingrese nombre del alumno");
		contador=contador +1;
		respuesta=prompt("si para continuar,No para salir");
	

		
		
	notas=prompt("ingrese nota");
	
	while(notas <0 || notas >10)
	{
		
		
		respuesta=prompt("si para continuar, no para salir");
	}
		promedio=acumulador/contador;
		document.write("<br>" + "el promedio es " +promedio)
		document.write("<br>" + "son"+contador+ " alumnos");
		


	}


	
	








}
