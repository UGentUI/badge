import styleString from "./style.scss?inline";
import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

// Note: It's best to put types in a separate file for reusability and maintainability, allowing them to be shared and updated easily.
// For clarity in this example, the type is defined here.
type BackgroundColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

@customElement("ug-badge")
export class Badge extends LitElement {
  static styles = unsafeCSS(styleString);

  @property({ type: String }) bg: BackgroundColor = "primary"; // Default value set here

  // Keep the dictionary private but remove readonly to allow dynamic updates
  private backgroundClassDictionary: Record<BackgroundColor, string> = {
    primary: "text-bg-primary",
    secondary: "text-bg-secondary",
    success: "text-bg-success",
    danger: "text-bg-danger",
    warning: "text-bg-warning",
    info: "text-bg-info",
    light: "text-bg-light",
    dark: "text-bg-dark",
  };

  // Use a getter to dynamically calculate the class string based on the 'bg' property
  private get classString(): string {
    return `badge ${
      this.backgroundClassDictionary[this.bg] ||
      this.backgroundClassDictionary.primary
    }`;
  }

  render() {
    return html` <span class="${this.classString}"><slot></slot></span> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ug-badge": Badge;
  }
}
