//Referência do Input
var nomeCampeonato = document.getElementById('nomeCampeonato');
var localCampeonato = document.getElementById('localCampeonato');
var dataCampeonato = document.getElementById('dataCampeonato');
var classeCampeonato = document.getElementById('classeCampeonato');
var descricaoCampeonato = document.getElementById('descricaoCampeonato');

document.getElementById('enviar').addEventListener('click', addCampeonato, false);

function addCampeonato(){
  var classeOfi = [];
  var opt = document.querySelectorAll("#classeCampeonato option");
  for (var i = 0; i < classeCampeonato.length; i++) {
    classeCampeonato[i]
    if (opt[i].selected && !opt[i].disabled) {
        console.log('classeCampeonato', classeCampeonato[i].value);
        classeOfi.push(classeCampeonato[i].value);
    }
  }

  // objeto campeonato
  var campeonato = {
    nome: nomeCampeonato.value,
    local: localCampeonato.value,
    data: dataCampeonato.value,
    classe: classeOfi,
    descricao: descricaoCampeonato.value
  }
  firebase.database().ref().child('campeonatos').push(campeonato);
}
