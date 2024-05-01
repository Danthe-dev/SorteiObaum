# SorteiObaum 

Este é um projeto feito como parte de um estudo de Node e Electron. Esta é uma versão não empacotada do programa, para roda-la você precisa do NODEjs instalado em sua maquina.

É preciso também adicionar o modulo electron na pasta raiz do projeto.

Caso não tenha certeza do que está fazendo, estude e aprenda.

## Funcionamento

A funcionalidade básica é de um sorteador de nomes. 

Ao entrar com uma lista de nomes separado pro quebra de linha e clicar no botão "Sortear", o JavaScript "drawName.js" é chamado, transformando a lista fornecida em um array de nomes.
Neste array, é rodada a função "Math.random()" que gera um numero aleatório maior ou igual a zero e menor que um.

Este número é multiplicado pela quantidade de nomes da lista fornecida, e o nome que está na posição do resultado desta conta é considerado como sorteado.

    let  names  =  document.getElementById('namesInput').value.split('\n');
    let  randomName  =  names[Math.floor(Math.random() *  names.length)];

**Exemplo:**
> Nome1
> Nome2
> Nome3

Na lista acima o array gerado seria o array abaixo, com os elementos [0, 1, 2]:

    names[Nome1, Nome2, Nome3] 

Supondo que Math.random() gere o número 0,7532783333.

    randomName = names[Math.floor( 0,7532783333 * 3)]
    randomName = names[Math.floor(2,259835)]
    randomName = names[2]

Neste exemplo, a função "Math.floor()" arredonda o número sempre para baixo, sem se importar com qual o valor das casas decimais.

Assim, o nome sorteado teria sido o **Nome2** da nossa lista.
Caso a lista tivesse a quantidade de 30 nomes, o nome sorteado seria o 22, já que 0,7532783333 * 30 = 22,598349999, sendo arredondado para 22.

Desta forma temos um sorteio completamente aleatório e imparcial, sendo justo para qualquer nome da lista, não importando a posição ou ordem dos nomes.
