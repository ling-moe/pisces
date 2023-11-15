import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDomainService, UserRemoteService } from '../../../domain/user.entity';
import { Remotable, Consumer, RemoteService } from '@pisces/musubi/client/remote.service';

@Component({
  selector: 'pisces-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class UserCreateComponent implements OnInit {
  form!: FormGroup;
  @Output()
  closeEvent = new EventEmitter<boolean>();
  userRepository: Remotable<UserDomainService>;
  constructor(
    private fb: FormBuilder,
    @Inject(RemoteService) musubiClient: Consumer<UserRemoteService>
  ) {
    this.userRepository = musubiClient.user;
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
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
  }

  onSubmit() {
    if (this.form.valid) {
      this.userRepository.create(this.form.value).subscribe(() => this.close());
    }
  }

  close(){
    this.form.reset();
    this.closeEvent.emit(true);
  }
}
