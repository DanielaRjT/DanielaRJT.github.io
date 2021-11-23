class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Daniela Rodriguez Jimenez.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
