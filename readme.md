<h1 align="center"> NLW Setup </h1>

<p align="center">Trilha Explorer</p>

## Aula 1 - Primeiros passos

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

## Aula 2 - Descomplicando o código

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
