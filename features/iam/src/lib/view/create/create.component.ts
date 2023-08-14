import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRemoteService } from '../../domain/user.remote';
import { RemoteService, Consumer } from '@pisces/musubi/client/remote.service';

@Component({
  selector: 'pisces-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder,
    @Inject(RemoteService) private userRemoteService: Consumer<UserRemoteService, 'user'>,
    ) { }

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
      password: ['123456']
    });
  }

  onSubmit() {
    console.log('qq')
    // if (this.myForm.valid) {
      this.userRemoteService.user.create(this.myForm.value).subscribe(res => console.log(res));
    // }
  }
}
