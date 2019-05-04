var lista = document.querySelectorAll('.lista8');
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

        + '<input id="PontRegata8" placeholder="Pontuação da regata" type="text" class="validate center" required="required">'
        + '</div>'


        + '<a id="enviar" class="btn-floating halfway-fab waves-effect waves-light cyan accent-4"><i class="material-icons">send</i></a>'

        + '</div>'

        + '</div>'
        + '</div>'
        + '</div>'


          });

        //   var update = document.querySelectorAll('.update-campeonato');
        //
        //   for (var i = 0; i < update.length; i++) {
        //     update[i].addEventListener("click", function (e) {
        //       e.preventDefault();
        //       campeonatoUpdateForm(this.dataset.equipe);
        // }
    });
  }





// <div class="row">
//        <div class="col s12 m6">
//          <div class="card blue-grey darken-1">
//            <div class="card-content white-text">
//               <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
//            </div>
//           </div>
//         </div>
// </div>
