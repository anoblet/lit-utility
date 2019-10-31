# spreadProps

```
const props = { foo: 'a', bar: 'b' };

render(html`
  <my-element ...=${spreadProps(props)}></my-element>
  `, document.getElementById('root'))
```
