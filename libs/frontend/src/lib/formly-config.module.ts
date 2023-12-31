import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { SharedModule } from './shared';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { FormlyFieldComboboxComponent } from './formly-templates';
import { FormlyWrapperCardComponent, FormlyWrapperDivComponent } from './formly-wrappers';
import { FormlyValidations } from './formly-validations';

/**
 * Formly global configuration
 */
const formlyModuleProviders = FormlyModule.forRoot({
  types: [
    {
      name: 'combobox',
      component: FormlyFieldComboboxComponent,
      wrappers: ['form-field'],
    },
  ],
  wrappers: [
    {
      name: 'card',
      component: FormlyWrapperCardComponent,
    },
    {
      name: 'div',
      component: FormlyWrapperDivComponent,
    },
  ],
  validationMessages: [],
}).providers as Provider[];

@NgModule({
  imports: [SharedModule,FormlyMatToggleModule],
  declarations: [
    FormlyFieldComboboxComponent,
    FormlyWrapperCardComponent,
    FormlyWrapperDivComponent,
  ],
  providers: [FormlyValidations],
})
export class FormlyConfigModule {
  constructor(formlyValidations: FormlyValidations) {
    formlyValidations.init();
  }

  static forRoot(): ModuleWithProviders<FormlyConfigModule> {
    return {
      ngModule: FormlyConfigModule,
      providers: [formlyModuleProviders],
    };
  }
}
