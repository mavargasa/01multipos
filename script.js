function mostrarMultiplos() {
  var numero = parseInt(document.getElementById('numero').value);
  var contador = 1;
  var resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  while (contador <= numero) {
    if (contador % 5 === 0) {
      var li = document.createElement('li');
      li.textContent = contador;
      resultado.appendChild(li);
    }
    contador++;
  }
}
