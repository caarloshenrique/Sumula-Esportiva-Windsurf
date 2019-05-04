var add = document.querySelectorAll('.add');
for (var i = 0; i < add.length; i++) {
  add[i].addEventListener('click', function () {
    save(this.id);
  });
}

function save(docName) {
  var form = document.querySelectorAll('.' + docName + ' input');
  var divInput = document.querySelectorAll('.' + docName + ' div');
  var obj = {};
  var checkbox = [];
  for (var i = 0; i < form.length; i++) {
    if (form[i].type == 'radio') {
      if (form[i].checked) {
        obj[form[i].name] = form[i].value;
        form[i].checked = false;
      }
    } else if (form[i].type == 'checkbox') {
      if (form[i].checked) {
        checkbox.push(form[i].value)
        form[i].checked = false;
      }
      obj[form[i].name] = checkbox;
    } else {
      obj[form[i].id] = form[i].value; // gera o objeto
      form[i].value = ''; // limpar os inputs
      if (divInput.length != 0 && divInput[i].classList.contains('is-dirty'))
        divInput[i].classList.remove('is-dirty'); // remove a classe is-dirty para que o campo retorne ao estado normal
    }
  }
  obj.data = Date();
  firebase.database().ref().child(docName).push(obj);
}
