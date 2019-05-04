window.addEventListener("load", showCampeonatos(JSON.parse(localStorage.getItem('Campeonatos'))), false)
document.getElementById("novoCampeonato").addEventListener("submit", enviar, false)
document.getElementById("buscar").addEventListener("click", searchCampeonato, false)
document.getElementById("busca").addEventListener("keypress", function(e) {
  // Trata a tecla ENTER
  var key = e.which || e.keyCode
  if (key === 13) {
    searchCampeonato()
  }
})

/**
 * Função verifica se há algum valor no atributo do botão enviar, se tiver ela chama a função updateCampeonato, senão chama a função addCampeonato
 * @param {Integer} integer com a posição no array
 */
function enviar(e) {
  var alt = document.getElementById('enviar').alt
  if (alt != undefined) {
    updateCampeonato()
  } else {
    addCampeonato()
  }
  e.preventDefault()
}

/**
 * Função para adicionar um campeonato do localStorage
 * @param {Event} event
 */
function addCampeonato(e) {
  // Obtém valores do formulário
  var nomeCampeonato = document.getElementById("nomeCampeonato").value
  var localCampeonato = document.getElementById("localCampeonato").value
  var dataCampeonato = document.getElementById("dataCampeonato").value
  // var classeCampeonato = []
  var classeCampeonato = document.getElementById("classeCampeonato").value
  var descricaoCampeonato = document.getElementById("descricaoCampeonato").value

  // Define um objeto com os valores obtidos do formulário
  var campeonato = {
    id: gerarIDCampeonato(),       // Adicionar
    nome: nomeCampeonato,
    local: localCampeonato,
    data: dataCampeonato,
    classe: classeCampeonato,
    descricao: descricaoCampeonato
  }

  // Testa se a chave 'campeonato' é nula (vazia)
  if(localStorage.getItem('Campeonatos') === null){
    // Inicia o vetor (array)
    var campeonatos = []
    // Adiciona objeto no array
    campeonatos.push(campeonato)
    // Armazena no localStorage - JSON.stringify = converte o JavaScript em nota JSON
    localStorage.setItem('Campeonatos', JSON.stringify(campeonatos))
  } else {
    // Define uma nova variável e coloca o conteúdo de localStorage nela - JSON.parse = converte a notação JSON em JavaScript
    var campeonatos = JSON.parse(localStorage.getItem('Campeonatos'))
    // Adiciona objeto no array
    campeonatos.push(campeonato)
    // Re-armazena no localStorage - JSON.stringify = converte o JavaScript em nota JSON
    localStorage.setItem('Campeonatos', JSON.stringify(campeonatos))
  }

  showCampeonatos(campeonatos)

  e.preventDefault()
}
/**
 * Função para editar um campeonato do localStorage
 * @param {Integer} integer com a posição no array
 */
function updateCampeonato(posicao) {
  var campeonatos = JSON.parse(localStorage.getItem('Campeonatos'))

  var posicao = document.getElementById('enviar').alt

  campeonatos[posicao].nome = document.getElementById('nomeCampeonato').value
  campeonatos[posicao].local = document.getElementById('localCampeonato').value
  campeonatos[posicao].data = document.getElementById('dataCampeonato').value
  campeonatos[posicao].classe = document.getElementById('classeCampeonato').value
  campeonatos[posicao].descricao = document.getElementById('descricaoCampeonato').value

  localStorage.setItem('Campeonatos', JSON.stringify(campeonatos))
  document.getElementById('enviar').alt = ""
  showCampeonatos(campeonatos)
}
/**
 * Função para excluir um campeonato do localStorage
 * @param {Integer} integer com a posição no array
 */
function deleteCampeonato(i) {
  var campeonatos = JSON.parse(localStorage.getItem('Campeonatos'))
  // O método splice retira itens do Array, o argumento (i) é a posição em
  // que o item está no array e o segundo argumento indica a quantidade de itens
  // que serão removidos.
  campeonatos.splice(i, 1)
  localStorage.setItem('Campeonatos', JSON.stringify(campeonatos))
  showCampeonatos(campeonatos)
}

/**
 * Função que gera uma nova chave no localStorage (idCampeonato), responsável por gerar o id automaticamente para o campeonato
 * @return {Integer} integer com id
 */
function gerarIDCampeonato() {
  var id = JSON.parse(localStorage.getItem('idCampeonato'))
  if(id === null){
    localStorage.setItem('idCampeonato', 1)
  } else {
    id += 1
    localStorage.setItem('idCampeonato', id)
  }
  return JSON.parse(localStorage.getItem('idCampeonato'))
}

/**
 * Função que coloca os valores do item escolhido nos campos de input
 * @param  {Integer} integer com a posição do item no array
 */
function setCampeonato(i) {
  var campeonatos = JSON.parse(localStorage.getItem('Campeonatos'))
  document.getElementById('nomeCampeonato').value = campeonatos[i].nome
  document.getElementById('localCampeonato').value = campeonatos[i].local
  document.getElementById('dataCampeonato').value = campeonatos[i].data
  document.getElementById('classeCampeonato').value = campeonatos[i].classe
  document.getElementById('descricaoCampeonato').value = campeonatos[i].descricao
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
function searchCampeonato() {
  document.getElementById('mensagem').innerHTML = ''
  var arrayCampeonatos = JSON.parse(localStorage.getItem("Campeonatos"))
  var resultadoDaBusca = []
  var valor = removerAcentos((document.getElementById("busca").value).toLowerCase())

  var descricaoCompleta

  for (var posicao in arrayCampeonatos) {
    descricaoCompleta = removerAcentos((arrayCampeonatos[posicao].nome + ' ' + arrayCampeonatos[posicao].local + ' ' + arrayCampeonatos[posicao].classe).toLowerCase())
    if (descricaoCompleta.indexOf(valor) >= 0) {
      resultadoDaBusca.push(arrayCampeonatos[posicao])
    }
  }

  if(resultadoDaBusca.length == 0) {
    document.getElementById('mensagem').innerHTML = '<h3>Nenhum registro localizado</h3>'
    showCampeonatos(arrayCampeonatos)
  } else
    showCampeonatos(resultadoDaBusca)
}
/**
 * Mostra todos os valores do array
 * @param  {Array} array com campeonatos
 */
function showCampeonatos(campeonatos) {
  // Pegar id (elemento HTML) de onde quero mostrar os Campeonatos: "relatorio"
  var listarCampeonatos = document.getElementById('relatorio')
  // Construir a saída
  listarCampeonatos.innerHTML = ''
  if(campeonatos === null || campeonatos.length === 0) {
    listarCampeonatos.innerHTML = '<h3>Nenhum registro localizado</h3>'
  } else {
    for(var i = 0; i < campeonatos.length; i++) {
      listarCampeonatos.innerHTML += '<h4>' + campeonatos[i].nome + ' ' + campeonatos[i].local + ' ' + campeonatos[i].classe + '</h4>'
            + '<button onclick="deleteCampeonato(' + i + ')">Excluir</button>' // Adicionar
            + '<button onclick="setCampeonato(' + i + ')">Editar</button>' // Adicionar
    }
  }
}
