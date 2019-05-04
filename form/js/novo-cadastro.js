window.addEventListener("load", showAlunos(JSON.parse(localStorage.getItem('Alunos'))), false)
document.getElementById("novoCadastro").addEventListener("submit", enviar, false)
document.getElementById("buscar").addEventListener("click", searchAluno, false)
document.getElementById("busca").addEventListener("keypress", function(e) {
  // Trata a tecla ENTER
  var key = e.which || e.keyCode
  if (key === 13) {
    searchAluno()
  }
})

/**
 * Função verifica se há algum valor no atributo do botão enviar, se tiver ela chama a função updateAluno, senão chama a função addAluno
 * @param {Integer} integer com a posição no array
 */
function enviar(e) {
  var alt = document.getElementById('enviar').alt
  if (alt != undefined) {
    updateAluno()
  } else {
    addAluno()
  }
  e.preventDefault()
}

/**
 * Função para adicionar um aluno do localStorage
 * @param {Event} event
 */
function addAluno(e) {
  // Obtém valores do formulário
  var nomeAluno = document.getElementById("nomeAluno").value
  var sobrenomeAluno = document.getElementById("sobrenomeAluno").value

  // Define um objeto com os valores obtidos do formulário
  var aluno = {
    id: gerarIDAluno(),       // Adicionar
    nome: nomeAluno,
    sobrenome: sobrenomeAluno
  }

  // Testa se a chave 'aluno' é nula (vazia)
  if(localStorage.getItem('Alunos') === null){
    // Inicia o vetor (array)
    var alunos = []
    // Adiciona objeto no array
    alunos.push(aluno)
    // Armazena no localStorage - JSON.stringify = converte o JavaScript em nota JSON
    localStorage.setItem('Alunos', JSON.stringify(alunos))
  } else {
    // Define uma nova variável e coloca o conteúdo de localStorage nela - JSON.parse = converte a notação JSON em JavaScript
    var alunos = JSON.parse(localStorage.getItem('Alunos'))
    // Adiciona objeto no array
    alunos.push(aluno)
    // Re-armazena no localStorage - JSON.stringify = converte o JavaScript em nota JSON
    localStorage.setItem('Alunos', JSON.stringify(alunos))
  }

  showAlunos(alunos)

  e.preventDefault()
}
/**
 * Função para editar um aluno do localStorage
 * @param {Integer} integer com a posição no array
 */
function updateAluno(posicao) {
  var alunos = JSON.parse(localStorage.getItem('Alunos'))

  var posicao = document.getElementById('enviar').alt

  alunos[posicao].nome = document.getElementById('nomeAluno').value
  alunos[posicao].sobrenome = document.getElementById('sobrenomeAluno').value

  localStorage.setItem('Alunos', JSON.stringify(alunos))
  document.getElementById('enviar').alt = ""
  showAlunos(alunos)
}
/**
 * Função para excluir um aluno do localStorage
 * @param {Integer} integer com a posição no array
 */
function deleteAluno(i) {
  var alunos = JSON.parse(localStorage.getItem('Alunos'))
  // O método splice retira itens do Array, o argumento (i) é a posição em
  // que o item está no array e o segundo argumento indica a quantidade de itens
  // que serão removidos.
  alunos.splice(i, 1)
  localStorage.setItem('Alunos', JSON.stringify(alunos))
  showAlunos(alunos)
}

/**
 * Função que gera uma nova chave no localStorage (idAluno), responsável por gerar o id automaticamente para o aluno
 * @return {Integer} integer com id
 */
function gerarIDAluno() {
  var id = JSON.parse(localStorage.getItem('idAluno'))
  if(id === null){
    localStorage.setItem('idAluno', 1)
  } else {
    id += 1
    localStorage.setItem('idAluno', id)
  }
  return JSON.parse(localStorage.getItem('idAluno'))
}

/**
 * Função que coloca os valores do item escolhido nos campos de input
 * @param  {Integer} integer com a posição do item no array
 */
function setAluno(i) {
  var alunos = JSON.parse(localStorage.getItem('Alunos'))
  document.getElementById('nomeAluno').value = alunos[i].nome
  document.getElementById('sobrenomeAluno').value = alunos[i].sobrenome
  document.getElementById('enviar').alt = i
}

/**
 * Remove acentose cedilhas (ç) de strings
 * @param  {String} string acentuada
 * @return {String} string sem acento
 */
function removerAcentos(s){
  var map={"â":"a","Â":"A","à":"a","À":"A","á":"a","Á":"A","ã":"a","Ã":"A","ê":"e","Ê":"E","è":"e","È":"E","é":"e","É":"E","î":"i","Î":"I","ì":"i","Ì":"I","í":"i","Í":"I","õ":"o","Õ":"O","ô":"o","Ô":"O","ò":"o","Ò":"O","ó":"o","Ó":"O","ü":"u","Ü":"U","û":"u","Û":"U","ú":"u","Ú":"U","ù":"u","Ù":"U","ç":"c","Ç":"C"};
  return s.replace(/[\W\[\] ]/g,function(a){return map[a]||a})
}
/**
 * Busca pelo nome/sobrenome no array
 */
function searchAluno() {
  document.getElementById('mensagem').innerHTML = ''
  var arrayAlunos = JSON.parse(localStorage.getItem("Alunos"))
  var resultadoDaBusca = []
  var valor = removerAcentos((document.getElementById("busca").value).toLowerCase())

  var nomeCompleto

  for (var posicao in arrayAlunos) {
    nomeCompleto = removerAcentos((arrayAlunos[posicao].nome + ' ' + arrayAlunos[posicao].sobrenome).toLowerCase())
    if (nomeCompleto.indexOf(valor) >= 0) {
      resultadoDaBusca.push(arrayAlunos[posicao])
    }
  }

  if(resultadoDaBusca.length == 0) {
    document.getElementById('mensagem').innerHTML = '<h3>Nenhum registro localizado</h3>'
    showAlunos(arrayAlunos)
  } else
    showAlunos(resultadoDaBusca)
}
/**
 * Mostra todos os valores do array
 * @param  {Array} array com alunos
 */
function showAlunos(alunos) {
  // Pegar id (elemento HTML) de onde quero mostrar os Alunos: "relatorio"
  var listarAlunos = document.getElementById('relatorio')
  // Construir a saída
  listarAlunos.innerHTML = ''
  if(alunos === null || alunos.length === 0) {
    listarAlunos.innerHTML = '<h3>Nenhum registro localizado</h3>'
  } else {
    for(var i = 0; i < alunos.length; i++) {
      listarAlunos.innerHTML += '<h4>' + alunos[i].nome + ' ' + alunos[i].sobrenome + '</h4>'
            + '<button onclick="deleteAluno(' + i + ')">Excluir</button>' // Adicionar
            + '<button onclick="setAluno(' + i + ')">Editar</button>' // Adicionar
    }
  }
}
