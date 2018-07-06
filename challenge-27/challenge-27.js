(function() {
    'use strict';
    /*
    Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
    métodos semelhantes aos que existem no array, mas que sirvam para os
    elementos do DOM selecionados.
    Crie os seguintes métodos:
    - forEach, map, filter, reduce, reduceRight, every e some.
    
    Crie também métodos que verificam o tipo do objeto passado por parâmetro.
    Esses métodos não precisam depender de criar um novo elmento do DOM, podem
    ser métodos estáticos.
    
    Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
    no objeto, como nos exemplos abaixo:
    DOM.isArray([1, 2, 3]); // true
    DOM.isFunction(function() {}); // true
    DOM.isNumber('numero'); // false
    
    Crie os seguintes métodos para verificação de tipo:
    - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    O método isNull deve retornar `true` se o valor for null ou undefined.
    */

    function DOM(element) {
        this.element = document.querySelectorAll(element);
    }

    DOM.prototype.on = function on(event, callback) {
        Array.prototype.forEach.call(this.element, function(element) {
            element.addEventListener(event, callback);
        });
    };

    DOM.prototype.off = function off(event, callback) {
        Array.prototype.forEach.call(this.element, function(element) {
            element.removeEventListener(event, callback);
        });
    };

    DOM.prototype.get = function get() {
        return this.element;
    };

    DOM.prototype.forEach = function forEach(callback) {
        Array.prototype.forEach.call(this.element, callback);
    };

    DOM.prototype.map = function map(callback) {
        Array.prototype.map.call(this.element, callback);
    };

    DOM.prototype.filter = function filter(callback) {
        Array.prototype.filter.call(this.element, callback);
    };

    DOM.prototype.reduce = function reduce(callback) {
        Array.prototype.reduce.call(this.element, callback);
    };

    DOM.prototype.reduceRight = function reduceRight(callback) {
        Array.prototype.reduceRight.call(this.element, callback);
    };

    DOM.prototype.every = function every(callback) {
        Array.prototype.every.call(this.element, callback);
    };
    
    DOM.prototype.some = function some(callback) {
        Array.prototype.some.call(this.element, callback);
    };

    DOM.isArray = function isArray(arr) {
        return Object.prototype.toString.call(arr) === '[object Array]';
    };

    DOM.isObject = function isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    };
    
    DOM.isFunction = function isFunction(func) {
        return Object.prototype.toString.call(func) === '[object Function]';
    };
    
    DOM.isNumber = function isNumber(number) {
        return Object.prototype.toString.call(number) === '[object Number]';
    };

    DOM.isString = function isString(str) {
        return Object.prototype.toString.call(str) === '[object String]';
    };
    
    DOM.isBoolean = function isBoolean(boolean) {
        return Object.prototype.toString.call(boolean) === '[object Boolean]';
    };

    DOM.isNull = function isNull(nullValue) {
        return Object.prototype.toString.call(nullValue) === '[object Null]' ||
        Object.prototype.toString.call(nullValue) === '[object Undefined]';
    };

    var $a = new DOM('[data-js="link"]');
})();
