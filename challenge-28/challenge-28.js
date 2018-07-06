(function(window, document) {
  /*
    No HTML:
    - Crie um formulário com um input de texto que receberá um CEP e um botão
    de submit;
    - Crie uma estrutura HTML para receber informações de endereço:
    "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
    preenchidas com os dados da requisição feita no JS.
    - Crie uma área que receberá mensagens com o status da requisição:
    "Carregando, sucesso ou erro."
  
    No JS:
    - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
    deve ser limpo e enviado somente os números para a requisição abaixo;
    - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
    "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
    no input criado no HTML;
    - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
    com os dados recebidos.
    - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
    a mensagem: "Buscando informações para o CEP [CEP]..."
    - Se não houver dados para o CEP entrado, mostrar a mensagem:
    "Não encontramos o endereço para o CEP [CEP]."
    - Se houver endereço para o CEP digitado, mostre a mensagem:
    "Endereço referente ao CEP [CEP]:"
    - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
    adicionar as informações em tela.
    */

  var $cep = document.querySelector('[data-js="cep"]');
  var $status = document.querySelector('[data-js="status"]');
  var $submit = document.querySelector('[data-js="pesquisar"]');
  var ajax = new XMLHttpRequest();

  function criarURLRequisicao() {
    return 'https://viacep.com.br/ws/' + $cep.value.replace(/D/g, '') + '/json/';
  }

  function dispararRequestAJAX(event) {
    event.preventDefault();
    ajax.open('GET', criarURLRequisicao());
    ajax.send();
  }

  function verificarSucessoRequisicao() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function atualizarMensagemStatus() {
    var textoStatus =
      verificarSucessoRequisicao() ?
        tratarRespostaRequisicao() :
        'Buscando informações para o CEP ' + $cep.value + '...';

    $status.textContent = textoStatus;
  }

  function tratarRespostaRequisicao() {
    var resposta = JSON.parse(ajax.responseText);

    if ('erro' in resposta)
      return 'Não encontramos o endereço para o CEP ' + $cep.value + '.';

    preencherDadosEndereco(resposta);
    return 'Endereço referente ao CEP ' + $cep.value + ':';
  }

  function preencherDadosEndereco(endereco) {
    var $dados = document.querySelector('[data-js="dados"] tbody');
    var $tabela = $dados.parentNode;
    var registroEndereco = document.createDocumentFragment();
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    var logradouro = document.createElement('td');
    var bairro = document.createElement('td');
    var estado = document.createElement('td');
    var cidade = document.createElement('td');
    var cep = document.createElement('td');

    logradouro.appendChild(document.createTextNode(endereco.logradouro));
    bairro.appendChild(document.createTextNode(endereco.bairro));
    estado.appendChild(document.createTextNode(endereco.uf));
    cidade.appendChild(document.createTextNode(endereco.localidade));
    cep.appendChild(document.createTextNode(endereco.cep));

    tr.appendChild(logradouro);
    tr.appendChild(bairro);
    tr.appendChild(estado);
    tr.appendChild(cidade);
    tr.appendChild(cep);
    tbody.appendChild(tr);
    registroEndereco.appendChild(tbody);
    $tabela.replaceChild(registroEndereco, $dados);
  }

  $submit.addEventListener('click', dispararRequestAJAX, false);
  ajax.addEventListener('readystatechange', atualizarMensagemStatus, false);
})(window, document);
