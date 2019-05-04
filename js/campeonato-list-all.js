var list = document.querySelectorAll('.list');
for (var i = 0; i < list.length; i++) {
  listAll(list[i]);
}

function listAll(list) {

  firebase.database().ref('campeonatos').on('value', function (snapshot) {
    list.innerHTML = '';

    snapshot.forEach(function (item) {
      var option = document.createElement('option');
      option.value = item.key;

      option.appendChild(document.createTextNode(item.val().nome));

      list.appendChild(option);

    });
    $(document).ready(function(){
        $('select').material_select();
    });
  });
}
