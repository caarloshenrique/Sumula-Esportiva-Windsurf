document.getElementById('escalar-comissao').addEventListener('click', escalarComissao, false);

function escalarComissao() {
  var escalacaoObj = {};
  var campeonatosObj = {};

  var keyCampeonato = document.getElementById('campeonatos').value;
  var comissao = document.getElementById('nomeComissao').value;

  for(var i = 0; i < keyCampeonato.length; i++) {
    console.log(keyCampeonato.length);
    if (keyCampeonato[i].selected) {
      escalacaoObj[keyCampeonato[i].value] = true;

      campeonatosObj[keyCampeonato[i].value+'/comissao/'+comissao] = true;
    }
  }

  var keyCa = firebase.database().ref().child('comissao/'+keyCampeonato);
  var keyCo = firebase.database().ref().child('comissao');

  keyCo.child('campeonato').update(campeonato);

  console.log(campeonatosObj);

  keyCa.update(campeonatosObj);
}
