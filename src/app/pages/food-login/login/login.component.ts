import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  foodForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.onInitForm();
  }

  /**
   * Convenience getter for easy access to form fields
   */
  get foodFormControl() {
    return this.foodForm.controls;
  }

  /**
   * Method to submit
   */
  onSubmit() {
    if (this.foodForm.invalid) {
      return;
    }

    alert('Success');
    console.table(this.foodForm.value);
  }

  /**
   * Method to init the form
   */
  private onInitForm() {
    this.foodForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [ '', [Validators.required, Validators.minLength(5)]],
    });
  }
}
