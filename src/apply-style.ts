import { CSSResult, LitElement } from "lit-element";

/**
 * Takes a node, CSSResult and appends it
 */
export const applyStyle = (node: HTMLElement, style: CSSResult) => {
  if ("adoptedStyleSheets" in document && node.shadowRoot) {
    const shadowRoot: any = node.shadowRoot;
    const sheets = shadowRoot.adoptedStyleSheets;
    shadowRoot.adoptedStyleSheets = [...sheets, style.styleSheet];
  } else {
    const styleNode = document.createElement("style");
    styleNode.textContent = style.cssText;
    if (node.shadowRoot) node.shadowRoot.appendChild(styleNode);
    else node.appendChild(styleNode);
  }
};
