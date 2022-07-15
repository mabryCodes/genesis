
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
.alert-body{
  display:block;
  border-width:0;
  border-left-width:8px;
  border-style:solid;
  padding:1rem;
}

.alert-header{
  font-size:var(--fs-lg);
  line-height:var(--lh-lg);
  font-weight:var(--fw-bold);
  text-transform:capitalize;
}

:host([statusType='info']) .alert-body{
  background-color:var(--outline-alert--default-info-background)
  ;
  background-color:var(
    --outline-alert-info-background,
    var(--outline-alert--default-info-background)
  );
  border-color:var(--outline-alert--default-info-border)
  ;
  border-color:var(
    --outline-alert-info-border,
    var(--outline-alert--default-info-border)
  );
  color:var(--outline-alert--default-info-text)
  ;
  color:var(
    --outline-alert-info-text,
    var(--outline-alert--default-info-text)
  );
}

:host([statusType='warning']) .alert-body{
  background-color:var(--outline-alert--default-warning-background)
  ;
  background-color:var(
    --outline-alert-warning-background,
    var(--outline-alert--default-warning-background)
  );
  border-color:var(--outline-alert--default-warning-border)
  ;
  border-color:var(
    --outline-alert-warning-border,
    var(--outline-alert--default-warning-border)
  );
  color:var(--outline-alert--default-warning-text)
  ;
  color:var(
    --outline-alert-warning-text,
    var(--outline-alert--default-warning-text)
  );
}

:host([statusType='error']) .alert-body{
  background-color:var(--outline-alert--default-error-background)
  ;
  background-color:var(
    --outline-alert-error-background,
    var(--outline-alert--default-error-background)
  );
  border-color:var(--outline-alert--default-error-border)
  ;
  border-color:var(
    --outline-alert-error-border,
    var(--outline-alert--default-error-border)
  );
  color:var(--outline-alert--default-error-text)
  ;
  color:var(
    --outline-alert-error-text,
    var(--outline-alert--default-error-text)
  );
}

:host([statusType='success']) .alert-body{
  background-color:var(--outline-alert--default-success-background)
  ;
  background-color:var(
    --outline-alert-success-background,
    var(--outline-alert--default-success-background)
  );
  border-color:var(--outline-alert--default-success-border)
  ;
  border-color:var(
    --outline-alert-success-border,
    var(--outline-alert--default-success-border)
  );
  color:var(--outline-alert--default-success-text)
  ;
  color:var(
    --outline-alert-success-text,
    var(--outline-alert--default-success-text)
  );
}
`;