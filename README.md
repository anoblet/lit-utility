```
const propsFrom = (o) => ({...Object.entries(o).map(([k, v]) => [`.{k}`, v])});
const eventsFrom = (o) => ({...Object.entries(o).map(([k, v]) => [`@{k}`, v])});

const propsObj = {value: 'foo', tabIndex: -1};
const eventsObj = {click: fooMethod};
html`<input
    ...=${propsFrom(propsObj)}
    ...=${eventsFrom(eventsObj)}
>`;
```
