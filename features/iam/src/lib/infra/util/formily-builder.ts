import { FormlyFieldConfig } from "@ngx-formly/core";
import { chunk } from "lodash";


// search

export function searchField(key: string, type: FieldType, label: string, required: boolean | undefined, options: { value: string | boolean | number, label: string; }[] | undefined, defaultValue: string | boolean | number | undefined): FormlyFieldConfig {
  return field(key, type, label, 'col-md-2', required, options, defaultValue);
}

export function inputSearchField(key: string, label: string): FormlyFieldConfig {
  return searchField(key, 'input', label, undefined, undefined, undefined);
}

export function selectSearchField(key: string, label: string, options?: { value: string | boolean | number, label: string; }[], defaultValue?: string | boolean | number): FormlyFieldConfig {
  return searchField(key, 'select', label, undefined, options, defaultValue);
}

export function searchFieldGroup(fields: FormlyFieldConfig[]): FormlyFieldConfig[] {
  return fieldGroup(fields, 6);
}

// drawer

export function drawerFieldGroup(fields: FormlyFieldConfig[]): FormlyFieldConfig[] {
  return fieldGroup(fields, 1);
}

export function drawerField(key: string, type: FieldType, label: string, required: boolean | undefined, options: { value: string | boolean | number, label: string; }[] | undefined, defaultValue: string | boolean | number | undefined): FormlyFieldConfig {
  return field(key, type, label, 'col-md-12', required, options, defaultValue);
}

export function inputDrawerField(key: string, label: string, required?: boolean): FormlyFieldConfig {
  return drawerField(key, 'input', label, required, undefined, undefined);
}

export function selectDrawerField(key: string, label: string, required: boolean | undefined, options: { value: string | boolean | number, label: string; }[] | undefined, defaultValue: string | boolean | number | undefined): FormlyFieldConfig {
  return drawerField(key, 'select', label, required, options, defaultValue);
}

export function toggleDrawerField(key: string, label: string, required: boolean | undefined, options: { value: string | boolean | number, label: string; }[] | undefined, defaultValue: string | boolean | number | undefined): FormlyFieldConfig {
  return drawerField(key, 'toggle', label, required, options, defaultValue);
}

export function textareaDrawerField(key: string, label: string, required: boolean | undefined, options: { value: string | boolean | number, label: string; }[] | undefined, defaultValue: string | boolean | number | undefined): FormlyFieldConfig {
  return drawerField(key, 'textarea', label, required, options, defaultValue);
}


// base

export type FieldType = 'input' | 'select' | 'toggle' | 'textarea';

export function fieldGroup(fields: FormlyFieldConfig[], colnum: number): FormlyFieldConfig[] {
  return chunk(fields, colnum).map(group => ({
    fieldGroupClassName: 'row',
    fieldGroup: group
  }));
}

export function field(key: string, type: FieldType, label: string, className: string, required: boolean | undefined, options: { value: string | boolean | number, label: string; }[] | undefined, defaultValue: string | boolean | number | undefined): FormlyFieldConfig {
  return {
    className: className,
    key, type,
    props: {
      label,
      options,
      required
    },
    defaultValue
  };
}
