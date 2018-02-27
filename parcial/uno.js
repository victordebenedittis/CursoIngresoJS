
function Mostrar()
//altura prompt triangulo equilatero informar perimetro y superficie
{
	var altura;
	var perimetro;
	var superficie;
	var laBase;

	laBase=prompt("ingrese la altura aqui: ");

	laBase=document.getElementById('laBase').value;
	perimetro=document.getElementById('perimetro').value;
	superficie=document.getElementById('superficie').value;

	perimetro=laBase*3;
	
	alert("el perimetro es= " +perimetro);


	
}
	