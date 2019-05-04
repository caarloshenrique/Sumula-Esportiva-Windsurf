//Referência do Input
var nomeCompetidor = document.getElementById('nomeCompetidor');
var nacioCompetidor = document.getElementById('nacioCompetidor');
var numCompetidor = document.getElementById('numCompetidor');
var sexoCompetidor = document.getElementsByName('sexo');
var dataCompetidor = document.getElementById('dataCompetidor');
var pesoCompetidor = document.getElementById('pesoCompetidor');
var categoriaCompetidor = document.getElementById('categoriaCompetidor');
var classeCompetidor = document.getElementById('classeCompetidor');

document.getElementById('enviar').addEventListener('click', addCompetidor, false);

function addCompetidor() {
  var objSexo = {};
  for (var i = 0; i < sexoCompetidor.length; i++) {
    if (sexoCompetidor[i].type == 'radio') {
      if (sexoCompetidor[i].checked) {
        objSexo = sexoCompetidor[i].id;
        sexoCompetidor[i].checked = false;
      }
    }
  }

  // objeto campeonato
  var competidor = {
    nome: nomeCompetidor.value,
    nacionalidade: nacioCompetidor.value,
    numeral: numCompetidor.value,
    sexo: objSexo,
    data: dataCompetidor.value,
    peso: pesoCompetidor.value,
    categoria: categoriaCompetidor.value,
    classe: classeCompetidor.value
  }
  firebase.database().ref().child('competidores').push(competidor);
}
