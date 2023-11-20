import { Directive, Input } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ReadValue } from '@knora/api';

@Directive()
export abstract class BaseValueComponent {

  shouldShowComment = false;

  @Input() abstract displayValue?: ReadValue;
  @Input() mode!: 'read' | 'update' | 'create' | 'search';

  abstract customValidators: ValidatorFn[];
  abstract valueFormControl: FormControl;
  abstract commentFormControl: FormControl;
  abstract form: FormGroup;
}
