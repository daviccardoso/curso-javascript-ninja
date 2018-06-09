/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var arr = ['Davi', 26, ['JS', 'SQL', 'SAP DS'], function () { }, { propriedade: 'valor' }];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function retornarArray(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(retornarArray(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function retornarIndice(arr, index) {
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var meuArray = [2.2, true, undefined, 'valor_alfa', NaN];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(retornarIndice(meuArray, 3));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(title) {
    var books = {
        'Conhecendo as Doutrinas da Bíblia': {
            quantidadePaginas: 409,
            autor: 'Myer Pearlman',
            editora: 'Vida'
        },
        'A Interpretação Bíblica': {
            quantidadePaginas: 360,
            autor: 'Roy Zuck',
            editora: 'Vida Nova'
        },
        'Em Guarda': {
            quantidadePaginas: 320,
            autor: 'William Lane Craig',
            editora: 'Vida Nova'
        }
    };

    return title === undefined ? books : books[title];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var title = 'Conhecendo as Doutrinas da Bíblia';
console.log('O livro "' + title + '" tem ' + book(title).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O autor do livro "' + title +'" é ' + book(title).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log('O livro "' + title + '" foi publicado pela editora '+ book(title).editora + '.');
