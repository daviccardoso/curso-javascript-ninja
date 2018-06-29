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

    var operadores = {
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

    var $display = document.querySelector('[data-js="display"');
    var $btn_0 = document.querySelector('[data-js="btn-0"');
    var $btn_1 = document.querySelector('[data-js="btn_1"');
    var $btn_2 = document.querySelector('[data-js="btn_2"');
    var $btn_3 = document.querySelector('[data-js="btn_3"');
    var $btn_4 = document.querySelector('[data-js="btn_4"');
    var $btn_5 = document.querySelector('[data-js="btn_5"');
    var $btn_6 = document.querySelector('[data-js="btn_6"');
    var $btn_7 = document.querySelector('[data-js="btn_7"');
    var $btn_8 = document.querySelector('[data-js="btn_8"');
    var $btn_9 = document.querySelector('[data-js="btn_9"');
    var $btn_soma = document.querySelector('[data-js="btn-soma"');
    var $btn_subtracao = document.querySelector('[data-js="btn-subtracao"');
    var $btn_multiplicacao = document.querySelector('[data-js="btn-multiplicacao"');
    var $btn_divisao = document.querySelector('[data-js="btn-divisao"');
    var $btn_igual = document.querySelector('[data-js="btn-igual"');
    var $btn_limpar = document.querySelector('[data-js="btn-limpar"');

    var botoesCalculadora = document.querySelectorAll('button');

    botoesCalculadora.forEach(function(item) {
        item.addEventListener('click', function() {
            $display.value += item.innerHTML;
        }, false);
    });

    function limparDisplay() {
        $display.value = '0';
    }

    function calcular() {
        var operandos = $display.value.split(/\D+/).map(function(nro) {
            return +nro;
        }).filter(function (nro) {
            return nro > 0;
        });

        var operadores = $display.value.split(/[\d=]/).filter(function(operador) {
            return operador !== '';
        });
    }

    $btn_limpar.addEventListener('click', limparDisplay, false);
    $btn_igual.addEventListener('click', calcular, false);
})(window, document);
