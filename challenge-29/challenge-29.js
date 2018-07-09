(function(DOM) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  function app() {
    var $formCadastro = new DOM('[data-js="cadastro"]');
    var $nome = new DOM('[data-js="nome"]');
    var $telefone = new DOM('[data-js="telefone"]');
    var $imagem = new DOM('[data-js="imagem"]');
    var $marcaModelo = new DOM('[data-js="marca-modelo"]');
    var $ano = new DOM('[data-js="ano"]');
    var $placa = new DOM('[data-js="placa"]');
    var $cor = new DOM('[data-js="cor"]');
    var $dados = new DOM('[data-js="dados"]');
    var ajax = new XMLHttpRequest();

    function enviarRequisicao() {
      ajax.open('GET', 'company.json');
      ajax.send();
    }

    function verificarStatusRequisicao() {
      if (ajax.readyState === 4 && ajax.status === 200)
        preencherDadosCabecalho();
    }

    function preencherDadosCabecalho() {
      var dados = JSON.parse(ajax.responseText);

      $nome.get()[0].textContent = dados.name;
      $telefone.get()[0].textContent = dados.phone;
    }

    function manipularSubmitForm(event) {
      event.preventDefault();
      atualizarDadosTabela();
    }

    function atualizarDadosTabela() {
      var carro = criarEstruturaDados();
      carro = prencherDadosEstrutura(carro);
      criarHierarquiaDOMEstrutura(carro);
    }

    function criarEstruturaDados() {
      return {
        docFragment: document.createDocumentFragment(),
        cadastro: document.createElement('tr'),
        imagem: document.createElement('td'),
        linkImagem: document.createElement('a'),
        marcaModelo: document.createElement('td'),
        ano: document.createElement('td'),
        placa: document.createElement('td'),
        cor: document.createElement('td')
      };
    }

    function prencherDadosEstrutura(carro) {
      carro.linkImagem.textContent = 'Foto do Carro';
      carro.linkImagem.href = $imagem.get()[0].value;
      carro.marcaModelo.textContent = $marcaModelo.get()[0].value;
      carro.ano.textContent = $ano.get()[0].value;
      carro.placa.textContent = $placa.get()[0].value;
      carro.cor.textContent = $cor.get()[0].value;

      return carro;
    }

    function criarHierarquiaDOMEstrutura(carro) {
      carro.imagem.appendChild(carro.linkImagem);
      carro.cadastro.appendChild(carro.imagem);
      carro.cadastro.appendChild(carro.marcaModelo);
      carro.cadastro.appendChild(carro.ano);
      carro.cadastro.appendChild(carro.placa);
      carro.cadastro.appendChild(carro.cor);
      carro.docFragment.appendChild(carro.cadastro);
      $dados.get()[0].appendChild(carro.docFragment);
    }

    enviarRequisicao();
    $formCadastro.on('submit', manipularSubmitForm);
    ajax.addEventListener('readystatechange', verificarStatusRequisicao, false);
  }

  app();
})(window.DOM, document);
