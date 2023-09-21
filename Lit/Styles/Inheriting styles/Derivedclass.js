class DerivedComponent extends BaseComponent {
  static styles = [
    BaseComponent.styles, // Inherit styles from the base class
    css`
      /* Additional styles or overrides for the derived component */
      .derived-class {
        background-color: lightgray;
      }
    `,
  ];

  render() {
    return html`
      <div class="base-class">Base class</div>
      <div class="derived-class">Derived Class</div>
    `;
  }
}
customElements.define("derived-class", DerivedComponent);
