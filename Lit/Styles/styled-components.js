import { LitElement, html } from "lit";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: blue;
`;

class MyComponent extends LitElement {
  render() {
    return html`
      <StyledDiv> This text is styled using styled-components. </StyledDiv>
    `;
  }
}
customElements.define("styled-components", MyComponent);
