import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRemoteService } from '../../../domain/user.entity';
import { RemoteService, Consumer } from '@pisces/musubi/client/remote.service';
import { User } from '@prisma/client';

@Component({
  selector: 'pisces-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class UserEditComponent {
  @Input()
  data!: User;
  @Output()
  submitClose = new EventEmitter<boolean>();

  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(RemoteService) private userRemoteService: Consumer<UserRemoteService, 'user'>
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      displayName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      sex: ['male', Validators.required],
      effectiveStartDate: ['', Validators.required],
      effectiveEndDate: ['', Validators.required],
      enabledFlag: [false],

      lang: ['zh_cn'],
      locale: ['zh'],
    });
    console.log(this.data);
    this.myForm.patchValue(this.data);
  }

  onSubmit() {
    console.log('qq');
    // if (this.myForm.valid) {
    this.userRemoteService.user.update({userId: this.data.userId, ...this.myForm.value}).subscribe(() => this.submitClose.emit(true));
    // }
  }
}
