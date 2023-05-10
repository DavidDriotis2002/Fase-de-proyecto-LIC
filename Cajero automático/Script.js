// Obtener el elemento de la lista
var lista = document.getElementById("registro-lista");

// Datos de ejemplo para los registros (puedes reemplazar esto con tus propios datos)
var registros = [
  { titulo: "Registro 1", descripcion: "Descripción del Registro 1" },
  { titulo: "Registro 2", descripcion: "Descripción del Registro 2" },
  { titulo: "Registro 3", descripcion: "Descripción del Registro 3" }
];

// Generar los elementos de lista para cada registro
registros.forEach(function(registro) {
  var li = document.createElement("li");
  var titulo = document.createElement("div");
  titulo.className = "titulo";
  titulo.textContent = registro.titulo;
  var descripcion = document.createElement("div");
  descripcion.className = "descripcion";
  descripcion.textContent = registro.descripcion;
  li.appendChild(titulo);
  li.appendChild(descripcion);
  lista.appendChild(li);
});

let saldoInicial = 0.00;

function depositar(){
  const cantidadDepositar = parseFloat(prompt("Ingrese la cantidad a depositar:"));

  if (isNaN(cantidadDepositar) || cantidadDepositar <= 0) {
    alert("Por favor, ingrese una cantidad válida.");
    return;
  }

  saldoInicial += cantidadDepositar;

  // Actualizar el elemento en el HTML
  document.getElementById("saldoActual").textContent = `Saldo actual: $${saldoInicial.toFixed(2)}`;
}

function retirar(){
  const cantidadRetirar = parseFloat(prompt("Ingrese la cantidad a retirar:"));

  if (isNaN(cantidadRetirar) || cantidadRetirar <= 0) {
    alert("Por favor, ingrese una cantidad válida.");
    return;
  }

  if (cantidadRetirar > saldoInicial) {
    alert("Fondos insuficientes. No puede retirar más de lo que tiene en su cuenta.");
    return;
  }

  saldoInicial -= cantidadRetirar;
  // Actualizar el elemento en el HTML
  document.getElementById("saldoActual").textContent = `Saldo actual: $${saldoInicial.toFixed(2)}`;
}