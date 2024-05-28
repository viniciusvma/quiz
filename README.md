# Quiz de Perguntas e Respostas

Este é um simples quiz de perguntas e respostas desenvolvido em HTML, CSS e JavaScript. Ele apresenta uma série de perguntas sobre animais de estimação e atribui pontos com base nas respostas corretas. No final, exibe um modal com o resultado do quiz.

## Funcionalidades

- Exibe uma pergunta de cada vez.
- Apresenta opções de resposta para cada pergunta.
- Atribui pontos com base nas respostas corretas.
- Exibe a pontuação atual durante o quiz.
- Ao final do quiz, exibe um modal com o resultado (cupom de desconto se a pontuação for alta).

## Como Utilizar

Basta abrir o arquivo `index.html` em um navegador web compatível. O quiz começará automaticamente, apresentando uma pergunta de cada vez. Selecione uma opção de resposta clicando nos botões. A pontuação será atualizada conforme as respostas corretas. Ao final, um modal será exibido com o resultado.

## Estrutura do Código

- **HTML**: Define a estrutura da página, incluindo o modal de resultado.
- **CSS**: Estiliza a aparência da página e do modal.
- **JavaScript**: Controla a lógica do quiz, exibindo perguntas, verificando respostas e exibindo o resultado.

## Perguntas

O conjunto de perguntas está definido no arquivo `main.js`. Cada pergunta é um objeto com os seguintes campos:
- `question`: A própria pergunta.
- `options`: Um array com as opções de resposta.
- `answer`: O índice da opção correta dentro do array de opções.

Para adicionar ou modificar as perguntas, basta editar o arquivo `main.js`.

## Aproveite o Quiz!

Divirta-se testando seus conhecimentos sobre animais de estimação com este quiz interativo!
