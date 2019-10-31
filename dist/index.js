const propsFrom = o => (Object.assign({}, Object.entries(o).map(([k, v]) => [`.{k}`, v])));
const eventsFrom = o => (Object.assign({}, Object.entries(o).map(([k, v]) => [`@{k}`, v])));

export { eventsFrom, propsFrom };
