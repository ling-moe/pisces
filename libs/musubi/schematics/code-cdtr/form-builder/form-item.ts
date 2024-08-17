import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class FormItem<T> {

  constructor(
    private $formControl: FormControl,
    private $props?: {
      display?: boolean,
      options?: { code: string | number; text: string; }[],
    }
  ) {
  }

  set value(value: T) {
    this.$formControl.patchValue(value);
  }

  get valueChanges():Observable<T>{
    return this.$formControl.valueChanges;
  }
}
