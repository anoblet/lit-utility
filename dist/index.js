import { directive } from 'lit-html';

const previousProps = new WeakMap();
const spreadProps = directive(props => part => {
    const prev = previousProps.get(part);
    if (prev === props) {
        return;
    }
    previousProps.set(part, props);
    Object.entries(props).forEach(([k, v]) => {
        if (v !== part.committer.element[k]) {
            part.committer.element[k] = v;
        }
    });
});

export { spreadProps };
