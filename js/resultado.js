var regata1 = parseInt(document.getElementById('PontRegata1').value);
var regata2 = document.getElementById('PontRegata2');
var regata3 = document.getElementById('PontRegata3');
var regata4 = document.getElementById('PontRegata4');
var regata5 = document.getElementById('PontRegata5');
var regata6 = document.getElementById('PontRegata6');
var regata7 = document.getElementById('PontRegata7');
var regata8 = document.getElementById('PontRegata8');

function soma(competidores){
  for (var i = 0; i < competidores.length; i++) {
    lista[i] = (regat1 + PontRegata2 + PontRegata3 + PontRegata4 + PontRegata5 + PontRegata6 + PontRegata7 + PontRegata8);
  }
}

var lista = document.querySelectorAll('.lista1');
for (var i = 0; i < lista.length; i++) {
    listar(lista[i]);
}

function listar(lista) {
    console.log(lista);
  firebase.database().ref(lista.title).on('value', function (snapshot) {
    lista.innerHTML = '';

    snapshot.forEach(function (item) {
      lista.innerHTML +=
        '<div class = "container">'
      + '<div class="col s12 m6">'
      + '<div class="card deep-purple darken-2 center">'

      + '<div class="card-content white-text">'

        + '<h5>' + item.val().nome + '</h5>'
        + '<p>' + item.val().nacionalidade + ' ' +  item.val().numeral+'</p>'
        + '<p>' + item.val().categoria + '</p>'
        + '<p>' + item.val().classe + '</p>'
        + '<div class="container">'

        + '<input id="PontRegata1" placeholder="Pontuação da regata" type="text" class="validate center" required="required">'
        + '</div>'


        + '<a class="btn-floating halfway-fab waves-effect waves-light cyan accent-4"><i class="material-icons">mode_edit</i></a>'

        + '</div>'

        + '</div>'
        + '</div>'
        + '</div>'
          });
    });
  }
