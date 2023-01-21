<h1 align="center"> NLW Setup </h1>

<p align="center">Trilha Explorer</p>

<a href="#aula1">Aula 1: Primeiros passos</a><br>
<a href="#aula2">Aula 2: Descomplicando o código</a><br>
<a href="#aula3">Aula 3: O poder do JavaScript</a><br>

<div id="aula1" align="center">

## Aula 1 - Primeiros passos

</div>

<hr>

### A) Projeto

Será desenvolvido um app para utilizar como <strong>assistente de controle de hábitos</strong>, estudando fundamentos da programação e tecnologias como HTML, CSS, Javascript, Git e Github.

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

Caixas possuem determinadas propriedades (Conteúdo, Largura, Altura, Borda, Preenchimento , Espaçamento)

### B) Configurando o VSCode

- Criado arquivo extensions.json e settings.json;
- Instalação de extensões (Live Server, Material Icon Theme, Omni Theme, Prettier);
- Criada pasta assets e inserida a imagem de logo a partir do figma (Copy/Paste as... /Copy as SVG/criar arquivo .svg/ colar código);

### C) Criando button "Registrar o meu dia"

### D) Criando seletores (pseudo-selector)

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
- Existem palavras reservadas da linguagem, ou seja, que são responsáveis em dar significado a diversas instruções;

### D) Executando JavaScript

- Podemos executar diretamente no navegador;
- Ferramenta DevTools: F12 do teclado;
- Plataformas online: fronteditor.dev, codepen.io, etc;

### E) Variáveis e tipos de dados

- Variáveis são dados que guardamos para usar mais tarde;
- Tipos de dados (textos, números, booleanos ou mais estruturados);

### F) DOM (Document Object Model)

- É a modelagem dos elementos HTML em Objeto JavaScript;

### G) Responsividade

- Adaptação de uma aplicação para diversos tipos de tela;

<hr>
<div id="aula4" align="center">

## Aula 4 - Profissionalizando o projeto

</div>

### A) Condicionais

- Uso do if/else para condicionar uma ação desejada;

### B) Função

-Eventos (click, change);

### C) Personalização e ajuste da data no JavaScript

- Personalização para pt-br;
- Cortar informação da data (slice);
