/*Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.*/
let horas = 0;
let minutos = 0;
let segundos = 0;
let interval_id = null;

function iniciar() {
  interval_id = setInterval(actualizar, 1000);
}

function actualizar() {
  segundos++;
  if (segundos >= 60) {
    segundos = 0;
    minutos++;
    if (minutos >= 60) {
      minutos = 0;
      horas++;
    }
  }
  document.getElementById("display").innerHTML = ("0" + horas).slice(-2) + ":" + ("0" + minutos).slice(-2) + ":" + ("0" + segundos).slice(-2);
}

function pausar() {
  clearInterval(interval_id);
}

function reset() {
  clearInterval(interval_id);
  horas = 0;
  minutos = 0;
  segundos = 0;
  document.getElementById("display").innerHTML = "00:00:00";
}