import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

interface sex {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  sexs: sex[] = [
    { value: 'Man', viewValue: 'Man' },
    { value: 'Woman', viewValue: 'Woman' },
    { value: 'Other', viewValue: 'Other' },
  ];

  title = 'register';
  hide_pass = true;
  hide_confirmPass = true;
  registerForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router) {

    this.registerForm = fb.group(
      {

        fullName: new FormControl('', [Validators.required]),

        email: new FormControl('', [Validators.required, Validators.email]),

        password: new FormControl('', [Validators.required]),

        confirmPassword: new FormControl('', [Validators.required,]),

        tel: new FormControl('', [
          Validators.required,
          Validators.pattern(/^0[9, 8, 6][0-9]{8}$/),
        ]),

        birthDay: new FormControl('', [Validators.required]),

        sex: new FormControl('', [Validators.required]),

      },
      { validators: this.checkPasswords }
    );
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  buttonHidden: Boolean = true;
  buttonShow: Boolean = false;
  async onSubmit() {
    if (this.registerForm.valid) {
      this.buttonShow = true;
      this.buttonHidden = false;
      console.log("Submitted");
      await this.registerService.creatUser(this.registerForm.value).subscribe((data) => {
        this.router.navigateByUrl(("success"));
      });
    }
  }

  onConfirmLink() {
    this.router.navigateByUrl(("login"));
  }

  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true };
  };

  matcher = new MyErrorStateMatcher();
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const invalidCtrl = !!(control?.invalid && control?.parent?.dirty);
    const invalidParent = !!(
      control?.parent?.invalid && control?.parent?.dirty
    );
    return invalidCtrl || invalidParent;
  }
}

