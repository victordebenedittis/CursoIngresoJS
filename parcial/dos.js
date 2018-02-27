// pedir precio y porcentaje de descuento 
function Mostrar()
{
  var precio;
  var procentaje;
  var importefinal;

  precio=prompt("ingrese precio");
  descuento=prompt("ingrese su descuento");

  descuento=(precio*descuento)/100;

  importefinal=(precio-descuento);

 
	alert("el descuento es= " +descuento);
  alert("su importe final es" +importefinal);

   





}
