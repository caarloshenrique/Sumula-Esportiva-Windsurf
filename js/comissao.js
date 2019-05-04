//Referência do Input
var nomeTecnico = document.getElementById('nomeTecnico');
var funcaoTecnico = document.getElementById('funcaoTecnico');
var categoriaTecnico = document.getElementById('categoriaTecnico');

document.getElementById('enviar').addEventListener('click', addTecnico, false);

function addTecnico() {

  // objeto tecnico
  var tecnico = {
    nome: nomeTecnico.value,
    funcao: funcaoTecnico.value,
    categoria: categoriaTecnico.value
  }
  firebase.database().ref().child('comissao').push(tecnico);
}
