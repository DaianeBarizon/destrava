```jsx
<p className="body">Lorem ipsum</p>
```

```js
{
  type: 'p',
  props: {
    className: 'body',
    children: 'Lorem ipsum'
  }
};
```

---

```jsx
<a href="https://www.conta.stone.com.br">Conta Stone</a>
```

```js
{
  type: 'a',
  props: {
    href="https://www.conta.stone.com.br"
    children: 'Conta Stone'
  }
};
```

---

```jsx
<ul>
  <li>
    First Item
  </li>
  <li>
    Second Item
  </li>
<ul>
```

```js
{
  type: 'ul',
  props: {
    children: [
      {
        type: 'li',
        props: {
          children: 'Fisrt Item'
        }
      },
      {
        type: 'li',
        props: {
          children: 'Second Item'
        }
      }
    ]
  }
};
```

---
