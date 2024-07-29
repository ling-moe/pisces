/**
 * 只做表单组件间的逻辑关系，不管他们的位置关系
 */

type InputType = 'text' | 'textarea' | 'number';
type Option = { code: string | number; text: string; };
type DefaultValue = string | number | boolean | undefined;
type DefaultValueType = DefaultValue | (() => DefaultValue);

export function input(id: string) {
  return new InputBuilder(id, 'text');
}
export function textarea(id: string) {
  return new InputBuilder(id, 'textarea');
}
export function number(id: string) {
  return new InputBuilder(id, 'number');
}

export function select(id: string) {
  return new SelectBuilder(id);
}

export function group(name: string, ...builders: AbstractBuilder[]) {
  return {
    type: 'group',
    name,
    builders,
    toText() {
       const form = builders.map(i => i.toText()).reduce((res, cur) => {
        res.template += cur.template;
        res.formControl += cur.formControl;
        res.controlFlow += cur.controlFlow;
        res.formVar +=  cur.formVar;
        return res;
      }, { template: '', formControl: '', controlFlow: '', formVar: ''});
      form.template = `<form [group]="form$${name}">\n${form.template}</form>\n`
      form.formControl = `form$${name} = {\n${form.formControl}};\n`
      form.controlFlow = `formInit$${name}() {\n${form.controlFlow}};\n`
      form.formVar = `formVar$${name} = {\n${form.formVar}};\n`
      return form;
    }
  };
}

export function multi(builders: AbstractBuilder[]) {
  return <MultiTool<AbstractBuilder>>{
    builders,
    control: (builder, controlFunction) => builder.controlBy(builders, controlFunction),
  };
}

interface MultiTool<T extends AbstractBuilder> {
  builders: T[];
  control(
    builder: T,
    controlFunction: (builders: ReturnType<T['props']>[], builder: T) => void
  ): void;
}

function renderIfExist(str: string | null | undefined, template: string) {
  return str ? template : '';
}

abstract class AbstractBuilder {

  private _id: string;
  private _label?: string;
  private _placeholder?: string;
  private _defaultValue?: DefaultValueType;
  private _required = false;
  private _value?: any;
  private _controls: {
    ids: string[];
    controlFunction: (
      builders: (ReturnType<AbstractBuilder['props']>[]) & string[],
      builder: AbstractBuilder
    ) => void;
  }[] = [];

  constructor(id: string) {
    this._id = id;
  }

  label(label: string) {
    this._label = label;
    return this;
  }

  placeholder(placeholder: string) {
    this._placeholder = placeholder;
    return this;
  }

  required() {
    this._required = true;
    return this;
  }

  defaultValue(value: DefaultValueType) {
    this._defaultValue = value;
    return this;
  }

  props() {
    return {
      id: this._id,
      label: this._label,
      placeholder: this._placeholder,
      defaultValue: this._defaultValue,
      required: this._required,
      value: this._value,
      controls: this._controls
    };
  }

  controlBy(
    _builders: AbstractBuilder[],
    controlFunction: (
      builders: ReturnType<AbstractBuilder['props']>[],
      builder: AbstractBuilder
    ) => void
  ) {
    this._controls.push({ ids: _builders.map(i => i._id), controlFunction });
  }

  controlByConst(consts: string, controlFunction: (consts: string[], builder: AbstractBuilder) => void) {
    this._controls.push({ ids: [consts], controlFunction });
  }

  control(
    move: InputBuilder,
    controlFunction: (props: InputBuilder, move: AbstractBuilder) => number
  ) {
    console.log(move, controlFunction);
  }
  toText(): {
    template: string;
    formControl: string;
    controlFlow: string;
    formVar: string;
  } {
    const { id, defaultValue, required, controls } = this.props();
    return {
      template: '',
      formVar: '',
      formControl: `${id}: new FormControl(${defaultValue}, ${required ? 'Validators.required' : ''}),\n`,
      controlFlow: controls.length ===0 ? '' : `${controls.map(control =>
        `combineLatest([${control.ids.join(', ')}]).subscribe(${control.controlFunction})`)};\n`
    };
  }
}

export class InputBuilder extends AbstractBuilder {
  private _type: InputType;

  constructor(id: string, type: InputType) {
    super(id);
    this._type = type;
  }

  override toText() {
    const { id, label, placeholder } = super.props();
    return {
      ...super.toText(),
      template: `<mat-form-field>
      <mat-label>${label}</mat-label>
      <input matInput type="${this._type}" id="${id}" ${renderIfExist(placeholder, `placeholder="${placeholder}"`)} formControlName="${id}">
    </mat-form-field>`,
    formVar: ''
    };
  }
}

export class SelectBuilder extends AbstractBuilder {
  private _options?: Option[];
  private _optionFunc?: () => Option[];
  private _dictCode?: string;

  options(options: Option[] | (() => Option[])) {
    if (typeof options === 'function') {
      this._optionFunc = options;
    } else {
      this._options = options;
    }
    this._dictCode = undefined;
    return this;
  }

  dict(dictCode: string) {
    this._dictCode = dictCode;
    this._options = undefined;
    this._optionFunc = undefined;
    return this;
  }

  override toText() {
    const { id, label, placeholder } = super.props();
    console.log(this._options, this._optionFunc, this._dictCode);

    let optionStr;
    if(this._options){
      optionStr = this._options;
    }else if(this._optionFunc){
      optionStr = `(${this._optionFunc.toString()})()`;
    }else{
      optionStr = '[]';
    }

    if(this._dictCode){
      // @ts-ignore
      super.controlByConst(`this.cardToolService.getConfig(${this._dictCode})`, ([value]) => this[`options$${id}`] = value)
    }
    return {
      ...super.toText(),
      template: `<mat-form-field>
        <mat-label>${label}</mat-label>
        <mat-select ${renderIfExist(placeholder, `placeholder="${placeholder}"`)} formControlName="${id}">
          <mat-option *ngFor="let item of options" [value]="item.code">{{item.text}}</mat-option>
        </mat-select>
       </mat-form-field>`,
       formVar: `options$${id} = ${optionStr},\n`
    };
  }
}
