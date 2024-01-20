import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDomainService,User } from '../../../domain/user.entity';
import { Consumer, RemoteService} from "@pisces/musubi/client";

@Component({
  selector: 'pisces-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  @Input()
  data!: User;
  @Output()
  closeEvent = new EventEmitter<boolean>();
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    @Inject(RemoteService)  private userRepository: Consumer<UserDomainService>
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: [{ value: '', disabled: true }, Validators.required],
      displayName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      sex: ['MAN', Validators.required],
      effectiveStartDate: ['', Validators.required],
      effectiveEndDate: ['', Validators.required],
      enabledFlag: [true],
      lang: ['zh_cn', Validators.required],
      locale: ['zh'],
      password: ['', Validators.required]
    });
    this.form.patchValue(this.data);
  }

  onSubmit() {
    if (this.form.valid) {
      this.userRepository.updateUser({ userId: this.data.userId, ...this.form.value }).subscribe(() => this.close());
    }
  }

  close(){
    this.closeEvent.emit(true);
  }
}
