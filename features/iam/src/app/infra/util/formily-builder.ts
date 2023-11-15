import { FormlyFieldConfig } from "@ngx-formly/core";
import { chunk } from "lodash";


// search

export function searchField(key: string, type: FieldType, label: string, extra?: CommonFieldType): FormlyFieldConfig {
  return field(key, type, label, {className: 'col-md-2', props:{required: extra?.required, options: extra?.options} , defaultValue: extra?.defaultValue});
}

export function inputSearchField(key: string, label: string): FormlyFieldConfig {
  return searchField(key, 'input', label);
}

export function selectSearchField(key: string, label: string, extra?: CommonFieldType): FormlyFieldConfig {
  return searchField(key, 'select', label, extra);
}

export function searchFieldGroup(fields: FormlyFieldConfig[]): FormlyFieldConfig[] {
  return fieldGroup(fields, 6);
}

// drawer

export function drawerFieldGroup(fields: FormlyFieldConfig[]): FormlyFieldConfig[] {
  return fieldGroup(fields, 1);
}

export function drawerField(key: string, type: FieldType, label: string, extra?: CommonFieldType): FormlyFieldConfig {

  return field(key, type, label, {className: 'col-md-12', props:{...extra, defaultValue: undefined, hide: undefined}, defaultValue: extra?.defaultValue, hide: extra?.hide,expressions: extra?.expressions});
}

export function inputDrawerField(key: string, label: string, extra?: CommonFieldType): FormlyFieldConfig {
  return drawerField(key, 'input', label, extra);
}

export function numberDrawerField(key: string, label: string, extra?: CommonFieldType): FormlyFieldConfig {
  return drawerField(key, 'number', label, extra);
}

export function selectDrawerField(key: string, label: string, extra?: CommonFieldType): FormlyFieldConfig {
  return drawerField(key, 'select', label, extra);
}

export function toggleDrawerField(key: string, label: string, extra?: CommonFieldType): FormlyFieldConfig {
  return drawerField(key, 'toggle', label, extra);
}

export function textareaDrawerField(key: string, label: string, extra?: CommonFieldType): FormlyFieldConfig {
  return drawerField(key, 'textarea', label, extra);
}


// base {className: 'col-md-12', props:{required, options} , defaultValue}

export type FieldType = 'input' | 'select' | 'toggle' | 'textarea' | 'number';

export type Props = Pick<Required<Pick<FormlyFieldConfig, 'props'>> extends {props: infer R} ? R : never, 'required' | 'options' | 'disabled'>;
export type DefaultValue = Pick<FormlyFieldConfig, 'defaultValue'>
export type Hide = Pick<FormlyFieldConfig, 'hide'>
export type Expressions = Pick<FormlyFieldConfig, 'expressions'>
export type CommonFieldType = Props & DefaultValue & Hide & Expressions;

export type FormAction = 'create' | 'update';

export function fieldGroup(fields: FormlyFieldConfig[], colnum: number): FormlyFieldConfig[] {
  return chunk(fields, colnum).map(group => ({
    fieldGroupClassName: 'row',
    fieldGroup: group
  }));
}

export function field(key: string, type: FieldType, label: string, extra: FormlyFieldConfig): FormlyFieldConfig {
  return {
    ...extra,
    key,
    type,
    props: {
      label,
      ...extra.props
    }
  };
}
