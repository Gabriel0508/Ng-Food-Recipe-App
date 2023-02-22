import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  errorMessages: any = {
    firstNameMessages: '',
    lastNameMessages: '',
    emailMessages: '',
    passwordMessages: '',
  };

  validationMessages: any = {
    firstNameMessages: {
      required: 'This field is required',
    },
    lastNameMessages: {
      required: 'This field is required',
    },
    emailMessages: {
      required: 'Email is required',
      email: 'This should be a valid email',
    },
    passwordMessages: {
      required: 'Password is required',
      minlength: 'This should contains at least min 5 characters',
    },
  };

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.onInitUserForm();
  }

  /**
   * Method to submit the form
   */
  onSubmit(): void {
    if (this.userForm.valid) {
      alert('SUCCESS');
    }
  }

  /**
   * Method to navigate back to the landing page
   */
  onNavigateTo(): void {
    this.router.navigateByUrl('/');
  }

  /**
   * Meyhod to init the user form
   */
  private onInitUserForm(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });

    const firstName = this.userForm.get('firstName');
    const lastName = this.userForm.get('lastName');
    const email = this.userForm.get('email');
    const password = this.userForm.get('password');

    firstName?.valueChanges.subscribe((value) =>
      this.setMessage(firstName, 'firstNameMessages')
    );
    lastName?.valueChanges.subscribe((value) =>
      this.setMessage(lastName, 'lastNameMessages')
    );
    email?.valueChanges.subscribe((value) =>
      this.setMessage(email, 'emailMessages')
    );
    password?.valueChanges.subscribe((value) =>
      this.setMessage(password, 'passwordMessages')
    );

    password?.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  public setMessage(field: any, messageIdentifier: string): void {
    this.errorMessages[messageIdentifier] = '';
    if ((field.touched || field.dirty) && field.errors) {
      this.errorMessages[messageIdentifier] = Object.keys(field.errors)
        .map((key) => {
          return this.validationMessages[messageIdentifier][key];
        })
        .join(' ');
    }
  }
}
