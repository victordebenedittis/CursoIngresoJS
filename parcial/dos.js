function Mostrar()
{
  var importe;
  var iva=1.21;
  var importeFinal;

  importe=prompt("ingrese su importe");

  importeFinal=importe*iva;
  document.getElementById('importeFinal').value=importeFinal;
}
