(function(window, document) {
    'use strict';
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:
    
    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;
    
    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */

    var $display = document.querySelector('[data-js="display"]');
    var $btn_igual = document.querySelector('[data-js="btn-igual"]');
    var $btn_limpar = document.querySelector('[data-js="btn-limpar"]');
    var $botoesNumericos = document.querySelectorAll('[data-js="btn-numericos"]');
    var $botoesOperacao = document.querySelectorAll('[data-js="btn-operacao"]');
    var operacoes = {
        '+': function(x, y) {
            return x + y;
        },
        '-': function(x, y) {
            return x - y;
        },
        'x': function(x, y) {
            return x * y;
        },
        '÷': function(x, y) {
            return x / y;
        }
    };

    function inserirCaractereNoDisplay() {
        limparDisplayQuandoEstiverZerado();
        $display.value += this.value;
    }

    function inserirOperadorNoDisplay() {
        $display.value = removerUltimoCaractereSeForUmOperador($display.value);
        inserirCaractereNoDisplay.call(this);
    }

    function limparDisplayQuandoEstiverZerado() {
        if ($display.value === '0')
            $display.value = '';
    }

    function zerarDisplay() {
        $display.value = '0';
    }

    function removerUltimoCaractereSeForUmOperador(str) {
        return eOUltimoCaractereUmOperador(str) ? str.slice(0, -1) : str;
    }

    function eOUltimoCaractereUmOperador(str) {
        return str.split('').pop() in operacoes;
    }

    function separarOperadoresEOperandos(expressao) {
        var segmentosExpressao = {};
        segmentosExpressao.operandos = expressao.split(/\D/).map(Number);
        segmentosExpressao.operadores = expressao.split(/\d+/).join('').split('');
        return segmentosExpressao;
    }

    function calcular() {
        $display.value = removerUltimoCaractereSeForUmOperador($display.value);
        var expressao = separarOperadoresEOperandos($display.value);
        $display.value = expressao.operandos.reduce(function(anterior, atual, index) {
            return operacoes[expressao.operadores[index - 1]](anterior, atual);
        });
    }

    $botoesNumericos.forEach(function(botao) {
        botao.addEventListener('click', inserirCaractereNoDisplay, false);
    });
    $botoesOperacao.forEach(function(botao) {
        botao.addEventListener('click', inserirOperadorNoDisplay, false);
    });
    $btn_limpar.addEventListener('click', zerarDisplay, false);
    $btn_igual.addEventListener('click', calcular, false);
})(window, document);
