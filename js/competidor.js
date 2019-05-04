//Referência do Input
var nomeCompetidor = document.getElementById('nomeCompetidor');
var nacioCompetidor = document.getElementById('nacioCompetidor');
var numCompetidor = document.getElementById('numCompetidor');
// var sexoCompetidor = document.getElementsByName('sexo');
var dataCompetidor = document.getElementById('dataCompetidor');
var pesoCompetidor = document.getElementById('pesoCompetidor');
var categoriaCompetidor = document.getElementById('categoriaCompetidor');
var classeCompetidor = document.getElementById('classeCompetidor');

document.getElementById('enviar').addEventListener('click', addCompetidor, false);

function addCompetidor() {

 //   var sexoCompetidor;
 //
 // for(var i = 0; i < sexoCompetidor.length; i++)
 //   if(sexoCompetidor[i].checked)
 //       sexoCompetidor = sexoCompetidor[i].value;

  // objeto campeonato
  var competidor = {
    nome: nomeCompetidor.value,
    nacionalidade: nacioCompetidor.value,
    numeral: numCompetidor.value,
    // sexo: sexoCompetidor,
    data: Date(),
    peso: pesoCompetidor.value,
    categoria: categoriaCompetidor.value,
    classe: classeCompetidor.value
  }
  firebase.database().ref().child('competidores').push(competidor);
}
