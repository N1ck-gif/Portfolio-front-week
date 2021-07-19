# Anotoções 

**webkit** - ele transpila o código mais atual no css para um código mais antigo. Com isso, gera mais compatibilidade para os browers entenderem os códigos atuais.

Na hora de **importar as fontes** do google fonts ou de qualquer outro lugar, importar o mínimo possível, se não o site fica um pouco mais pesado

No css, podemos representar **0.5** simplesmente como **.5**

**flex-grow** - ele fala para os elementos até que tamanho eles podem crescer

## Gradiente em textos

Podemos colocar gradiente em textos adicionando estas linhas no css

**background: linear-gradient(225deg, #2DC7ED 0%, #538bf0 100%);**
**-webkit-background-clip: text;**
**-webkit-text-fill-color: transparent;**

-----------------------------------------

Podemos colocar um elemento atrás do outro com:
**z-index: -1;**

Podemos redirecionar o usuário para outra aba no navegador usando a propriedade **target="_blank"** dentro da tag **<a>**

## Animações

A bibilioteca que vamos utilizar para animações é a **GSAP**
Podemos achar as importações dele via CDN pesquisando por **gsap cdn**

Para carregar as nossas animações, utilizamos o evento **DOMContentLoaded** para carregar as animações depois que o conteúdo da tela já estiver carregado.

Para as animações que nós criamos dar certo, os elementos que recebem a animação precisam ser elementos de bloco