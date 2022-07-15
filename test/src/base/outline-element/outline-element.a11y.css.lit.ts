
import { css } from 'lit';
export default css`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
/* Apply proper CSS for accessibly hiding elements to each component. */
:host([aria-hidden="true"]),
[aria-hidden="true"],
.visually-hidden {
  position: absolute !important;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  word-wrap: normal;
}
/* Apply component specific CSS */
.sr-only{
  position:absolute !important;
  overflow:hidden;
  clip:rect(1px, 1px, 1px, 1px);
  width:1px;
  height:1px;
  word-wrap:normal;
}
`;