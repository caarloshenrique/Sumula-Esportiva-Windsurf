document.querySelector('#campeonato').addEventListener('submit', function (e) {
  e.preventDefault();
  alterar(this.dataset.chave);
});

function campeonatoUpdateForm(chave) {
  //  $('#modal1').modal('close');
  document.querySelector('#campeonato').dataset.chave = chave;

  var keyEq = firebase.database().ref().child('campeonatos/'+chave);

  keyEq.once('value', function (snapshot) {
    var nomeCampeonato = document.querySelector("#nomeCampeonato");
    nomeCampeonato.value = snapshot.val().nome;

    var localCampeonato = document.querySelector("#localCampeonato");
    localCampeonato.value = snapshot.val().local;

    var dataCampeonato = document.querySelector("#dataCampeonato");
    dataCampeonato.value = snapshot.val().data;
  })
}

document.querySelector('#campeonato').dataset.chave = chave;

  var keyEq = firebase.database().ref().child('campeonatos/'+chave+'/classe');

  keyEq.once('value', function (snapshot) {
    var classeOfi = [];
    var opt = document.querySelectorAll("#classeCampeonato option");
    for (var i = 0; i < classeCampeonato.length; i++) {
      if (classeCampeonato[i].value == snapshot.val().classe) {
          classeOfi.push(classeCampeonato[i].selected);
      }


    // var modalidade = document.getElementsByName('modalidade');
    //
    // for (var i = 0; i < modalidade.length; i++) {
    //   if (modalidade[i].value == snapshot.val().modalidade)
    //     modalidade[i].checked = true;
    // }
  }
}


function alterar (chave) {
  var nome = document.querySelector("#nomeCampeonato").value;
  var modalidade = document.getElementsByName('modalidade');

  var obj = {
    nome: nomeCampeonato,
    local: localCampeonato,
    data: dataCampeonato,
    classe: classeOfi,
    descricao: descricaoCampeonato,
    dataAlteracao: Date()
  }

  // for (var i = 0; i < modalidade.length; i++) {
  //   if (modalidade[i].checked)
  //     obj.modalidade = modalidade[i].value;
  // }

  firebase.database().ref().child('equipe/'+chave).update(obj);
}
