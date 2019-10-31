export const propsFrom = o => ({
  ...Object.entries(o).map(([k, v]) => [`.{k}`, v])
});

export const eventsFrom = o => ({
  ...Object.entries(o).map(([k, v]) => [`@{k}`, v])
});
