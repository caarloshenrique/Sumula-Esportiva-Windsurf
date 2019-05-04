var regata1 = document.getElementById('PontRegata1');
var regata2 = document.getElementById('PontRegata2');
var regata3 = document.getElementById('PontRegata3');
var regata4 = document.getElementById('PontRegata4');
var regata5 = document.getElementById('PontRegata5');
var regata6 = document.getElementById('PontRegata6');
var regata7 = document.getElementById('PontRegata7');
var regata8 = document.getElementById('PontRegata8');

document.getElementById('enviar').addEventListener('click', addRegatas, false);

function addRegatas(){

  // objeto campeonato
  var resultado = {
    nome: nomeComissao.value,
    descricao: descricaoComissao.value,
    data: Date()
  }

  firebase.database().ref().child('competidores').push(resultado);
}
