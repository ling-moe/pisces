import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDomainService, UserRemoteService,User } from '../../../domain/user.entity';
import { Remotable, Consumer, RemoteService } from '@pisces/musubi/client/remote.service';

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
  userRepository: Remotable<UserDomainService>;
  constructor(
    private fb: FormBuilder,
    @Inject(RemoteService) musubiClient: Consumer<UserRemoteService>
  ) {
    this.userRepository = musubiClient.user;
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
      this.userRepository.update({ userId: this.data.userId, ...this.form.value }).subscribe(() => this.close());
    }
  }

  close(){
    this.closeEvent.emit(true);
  }
}
