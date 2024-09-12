import styleString from "./style.scss?inline";
import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = unsafeCSS(styleString);

  @property({ type: String }) title = "Hello, UGent!";

  render() {
    return html` <div class="my-element">
      <h1 class="h3">${this.title}</h1>
      <div class="slotted-content">
        <slot></slot>
      </div>
      <ug-badge text="HIHI">Tralala</ug-badge> 
      <ug-badge bg="primary" text="My Text">Primary</ug-badge>
      <ug-badge bg="secondary">secondary</ug-badge>
      <ug-badge bg="success">Success</ug-badge>
      <ug-badge bg="danger">Danger</ug-badge>
      <ug-badge bg="warning">warning</ug-badge>
      <ug-badge bg="info">info</ug-badge>
      <ug-badge bg="light">light</ug-badge>
      <ug-badge bg="dark">dark</ug-badge>

      <button class="btn btn-primary" @click=${this._handleClick}>
        Click me
      </button>
    </div>`;
  }

  _handleClick() {
    const event = new CustomEvent("button-click", {
      detail: { message: "Button was clicked!" },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
