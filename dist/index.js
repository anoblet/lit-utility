import { directive } from 'lit-html';

/**
 * Takes a node, CSSResult and appends it
 */
const applyStyle = (node, style) => {
    if ("adoptedStyleSheets" in document && node.shadowRoot) {
        const shadowRoot = node.shadowRoot;
        const sheets = shadowRoot.adoptedStyleSheets;
        shadowRoot.adoptedStyleSheets = [...sheets, style.styleSheet];
    }
    else {
        const styleNode = document.createElement("style");
        styleNode.textContent = style.cssText;
        if (node.shadowRoot)
            node.shadowRoot.appendChild(styleNode);
        else
            node.appendChild(styleNode);
    }
};

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

export { applyStyle, spreadProps };
