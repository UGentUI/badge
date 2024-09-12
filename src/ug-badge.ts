import styleString from "./style.scss?inline";
import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ug-badge")
export class UGBadgeComponent extends LitElement {
    static styles = unsafeCSS(styleString);

    @property({ type: String }) bg!: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    @property({ type: String }) text = "";

    render() {
        return html`
          <span class="${this._getClassString()}">
          <slot></slot>
          ${this.text}</span>
        `;
    }

    readonly backgroundClassDictionary: Record<string, string> = {
        primary: "text-bg-primary",
        secondary: "text-bg-secondary",
        success: "text-bg-success",
        danger: "text-bg-danger",
        warning: "text-bg-warning",
        info: "text-bg-info",
        light: "text-bg-light",
        dark: "text-bg-dark"
    };

    _getClassString(): string {
        return `badge ${this._getBackgroundClass() }`;
    }

    _getBackgroundClass(): string {
        return this.backgroundClassDictionary[this.bg] || "text-bg-default";
    }
}

customElements.define('ug-badge', UGBadgeComponent);

declare global {
  interface HTMLElementTagNameMap {
      "ug-badge": UGBadgeComponent;
  }
}
