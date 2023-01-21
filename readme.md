<h1 align="center"> NLW Setup 🚀</h1>

<p align="center">Trilha Explorer</p>

## Índice 🔍

<a href="#aula1">Aula 1: Primeiros passos</a><br>
<a href="#aula2">Aula 2: Descomplicando o código</a><br>
<a href="#aula3">Aula 3: O poder do JavaScript</a><br>
<a href="#aula4">Aula 4: Profissionalizando o projeto</a><br>
<a href="#aula5">Aula 5: O próximo nível</a><br>

<div id="aula1" align="center">

## Aula 1 - Primeiros passos

</div>

<hr>

### A) Projeto

Será desenvolvido um app para utilizar como <strong>assistente de controle de hábitos</strong>, estudando fundamentos da programação e tecnologias como HTML, CSS, Javascript, Git e Github.

<p align="center">
    <img alt="projeto habits" src="./assets/capa.jpg" width="60%" />
  </p>

<em>Link do Figma: <a href="https://www.figma.com/community/file/1195327109778210238">Layout do Projeto</a></em>

### B) Preparando o ambiente

- Orientações para instalação e configuração do VS Code, Figma, Git, Github, Node e NPM;

### C) Fundamentos HTML (Hypertext Markup Language) e CSS (Cascading Style Sheets)

- Tags: Elemento;
- Atributos: Configurações do elemento;
- Declarations (css): Propriedade e valor;
- Importância da sintaxe;

<hr>

<div id="aula2" align="center">

## Aula 2 - Descomplicando o código

</div>

### A) Revisando conteúdo

## HTML

### Sintaxe de uma tag

Como escrevemos tags HTML?

```html
<p>conteúdo</p>
<!-- Aqui vem um comentário -->
```

### Atributos

Adicionam informações e/ou configurações à uma tag

Como escrevemos atibutos?

```html
<a href="https://www.google.com.br">Ver site</a> <img src="image.jpg" />
```

## CSS

### Declaration

Pedaço de código que irá ditar as propriedades e valores a serem aplicadas a um elemento HTML

Como escrevemos?

```css
body {
  background: black;
  /* color: green; Essa linha será ignorada */
}
```

### Cascata

Quando há 2 (ou mais) declarações a última será mais relevante

```css
body {
  background: red;
}

body {
  background: blue;
}
```

### Specificity

Cada seletor tem um peso e a soma dos pesos, será levada em conta para que determinada declaração seja mais específica.

Exemplos:

```css
#id {
  /* peso 100 */
}
```

```css
.class {
  /* peso 10 */
}
```

```css
element {
  /* peso 1 */
}
```

<em>A cascata perde prioridade e é priorizada a especificidade da declaração</em>

### Box Model

Todos os elementos HTML serão considerados uma caixa, assim como uma caixa de papelão

Caixas possuem determinadas propriedades (Conteúdo, Largura, Altura, Borda, Preenchimento , Espaçamento)´

<p align="center"><img alt="box model" src="./assets/boxmodel.png" width="45%"></p>

### B) Configurando o VSCode

- Criado arquivo extensions.json e settings.json;
- Instalação de extensões (`Live Server`, `Material Icon Theme`, `Omni Theme`, `Prettier`);
- Criada pasta assets e inserida a imagem de logo a partir do figma (Copy/Paste as... /Copy as SVG/criar arquivo .svg/ colar código);

<hr>

<div id="aula3" align="center">

## Aula 3 - O poder do JavaScript

</div>

### A) Algoritmos e Lógica de Programação

- Algoritmos: Sequência de passos, conjunto de regras;
- Lógica de programação: Maneira de pensar;
- Sintaxe: Maneira correta de escrever;
- Linguagem de programação: Interpretada e executada pelos navegadores;
- Inteligência da tríade: HTML é a estrutura, CSS é a beleza e JS é a inteligência;
- Java é diferente de JavaScript, são linguagens diferentes;

### B) Introdução do JavaScript

- É utilizado em aplicativos para web, desktop (ex: Electron) e mobile (ex: React Native);
- É usado por empresas famosas como instagram, google, netflix, tiktok, etc;
- É uma linguagem moderna e viva, com uma comunidade e linguagem que cresce cada vez mais;

### C) Instruções e sintaxe

- Toda linguagem é escrita com 2 princípios: Instruções (declarações) e sintaxe;
- Existem `palavras reservadas` da linguagem, ou seja, que são responsáveis em dar significado a diversas instruções;

### D) Executando JavaScript

- Podemos executar diretamente no navegador;
- Ferramenta `DevTools`: F12 do teclado;
- Plataformas online:
  - [fronteditor.dev](https://fronteditor.dev)
  - [codepen.io](https://codepen.io)
- Projeto no computador:

```html
<!-- em um arquivo index.html -->
<!-- importamos um arquivo .js no .html -->
<script src="./script.js"></script>
```

### E) Variáveis e tipos de dados

- Variáveis são dados que guardamos para usar mais tarde;
- Tipos de dados `textos`, `números`, `booleanos` ou mais `estruturados`;

```javascript
// declaro e atribuo valor
let boasVindas = "Fala, Dev!"

// reatribuo valor
boasVindas = `Fala, Dev! Tudo beleza?!`

// constante não pode mudar o valor
const serHumano = true
serHumano = false // Erro!
```

### F) Objetos

Tudo é objeto!

- Atributos: são as propriedades de um objeto.
- Métodos: são as funcionalidades de um objeto.

```javascript
// criando um objeto
const celular = {
  cor: "preto",
  ligar: function () {},
}

// usando um objeto
celular.cor // preto
celular.ligar() // executa função
```

### G) Funções

- Agrupamento de código
- Reuso de código
- Mini programas dentro do programa maior
- Toda linguagem oferece muitas opções

```javascript
// usando uma função
alert("Fala, Dev!")

// criando uma função
function alert(text) {
  return text
}
```

### H) DOM

Document Object Model

- Modelagem dos elementos HTML em Objeto JavaScript

a) Document:
Posso controlar minha página, meu documento HTML, pelo JavaScript, através do objeto document.

```javascript

 // objeto que existe em todo navegador
.querySelector('a') // seleciona a tag a

.click() // dá a ordem de clicar na tag a
```

**Biblioteca**

[Documentação da Biblioteca utilizada neste projeto.](https://maykbrito.github.io/libs/NLWSetup/documentation/NLWSetup.html)

```html
<script src="https://cdn.jsdelivr.net/gh/maykbrito/libs/NLWSetup/source/NLWSetup.js"></script>
```

<hr>
<div id="aula4" align="center">

## Aula 4 - Profissionalizando o projeto

</div>

### A) Método addDay (date)

Adiciona um dia aos dias registrados e depois renderiza o layout

```javascript
nlwSetup.addDay("31/12")
```

### B) Função dayExists(date) + {boolean}

Verifica se o dia já existe no conjunto de dias.

```javascript
nlwSetup.dayExists("31/12") // true or false
```

### C) Ajustando e formatando data

neWDate().toLocaleDateString('pt-br').slice (0,-5)

- `new Date()` gera data;
- `.toLocaleDateString('pt-br')` converte para o padrão pt-br;
- `slice()` define, de trás pra frente, quais caracteres serão recortados;

### D) Guardando informações

localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))

-`localStorage` guarda informações na memória do browser; -`setItem()` função que guarda a informação, aqui é onde colocamos o nome da função e o valor que desejamos armazenar

- `JSON.stringify()` converte os dados em string para armazenar

### E) Verificação de dados

JSON.parse(localStorage.getItem('NLWSetup@habits'))

-Converte a dado para um valor desejado, localizando no localStorage se já existem informações registradas na chave; -`nlwSetup.setData(data)` e `nlwSetup.load()` finalizam essa etapa.

[Documentação da Biblioteca utilizada neste projeto.](https://maykbrito.github.io/libs/NLWSetup/documentation/NLWSetup.html)

<hr>

<div id="aula5" align="center">

## Aula 5 - O próximo nível

</div>

### A) Git

- Controle de versão;
- Histórico do projeto (linha do tempo);

<p align="center"><img alt="linha do tempo git" src="./assets/git.png" width="50%"></p>

- Repository: local que ficará o histórico do seu projeto;
- Branch: Linha do tempo
- Commit: Pontos da história
- Stage: Preparação do que será enviado para o ponto na história

**Comandos**

```javascript
// inicia o git (repositório) no seu projeto
git init

// adiciona todos os arquivos modificados, ao stage
git add .

// cria e descreve um ponto na história
git commit -m "message here"

// envia alterações para o repositório remoto
git push
```

### B) Github

- Plataforma online para colocar seus códigos através do Git;
- Possibilita trabalhar em diversos projetos, o profissional pode colaborar em projetos ou trabalhar com times;
- Perfil para mostrar seu trabalho (Portfólio);
