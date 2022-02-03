# De grão em grão...

A galinha enche o papo!

Não seria em +- duas horas que iriamos conseguir equiparar tantos anos de desenvolvimento do React.

Mas não é por isso que podemos deixar nossa implementação ainda melhor.

---

1. Adicionando a API de estilos
   
A primeira coisa que vamos fazer é adicionar estilos aos nossos componentes.

É claro que poderíamos apenas adicionar uma folha de estilos CSS e adicionar classes aos nossos componentes.

Há no entanto um problema, como no JS a palavra class é reservada, não poderíamos esquecer de usar a palavra className no seu lugar.

Adicione uma classe ao componente e um estilo diretamente no index.html para ver o JSX fazer seu trabalho.

Agora, se quisermos adicionar estilos "inline" a coisa é diferente.

Se você adicionar ao nosso componente estilos em linha vai notar que será inserida uma string vazia.

É preciso "interceptar" a prop e transformar o objeto em um estilo válido.

Esse é o seu primeiro desafio.

---

2. Eventos
   Outra coisa que o nosso React ainda não faz direito é adicionar os eventos ao DOM.

Se você adicionar uma prop de "onClick" no nosso h1, por agora, nada acontece.

Vamos fazer isso acontecer, dessa vez deixamos alguns snippets para te ajudar.

Para que isso funcione é preciso que a gente primeiro crie uma função chamada "isEvent" similar a "isProperty", mas para verificar se a prop é um evento.

Para essa verificação podemos verificar se a prop começa com a string "on".

```js
function isEvent(key) {
  return key.substring(0, 2) === "on";
}
```

Adicione essa verificação a função isProperty, para filtrar para fora de atributos os eventos.

```js
const isProperty = (key) => key !== "children" && !isEvent(key);
```

Agora precisamos iterar os eventos da mesma maneira que fazemos com as props utilizando a função isEvent e adicionando os eventListener's ao dom.

```js
Object.keys(element.props)
  .filter(isEvent)
  .forEach((event) => {
    dom.addEventListener(
      event.toLowerCase().substring(2),
      element.props[event]
    );
  });
```

---

3. Estado
   Assista a palestra abaixo:
   https://www.youtube.com/watch?v=KJP1E-Y-xyo&list=WL&index=15

E tente usar os ensinamentos para implementar um hook "useEffect" para nosso react.
