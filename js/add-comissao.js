var nomeComissao = document.getElementById('nomeComissao');
var descricaoComissao = document.getElementById('descricaoComissao');

document.getElementById('enviar').addEventListener('click', addComissao, false);

function addComissao(){

  // objeto campeonato
  var comissao = {
    nome: nomeComissao.value,
    descricao: descricaoComissao.value,
    data: Date()
  }

  firebase.database().ref().child('comissao').push(comissao);
}
