import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {
  newsletterForm: FormGroup = new FormGroup({});
  errorMessages: any = {
    emailMessages: '',
  };

  validationMessages: any = {
    emailMessages: {
      required: 'Email is required',
      email: 'This should be a valid email',
    },
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.onInitForm();
  }

  /**
   * Method to submit
   */
  onSubmit() {
    if (this.newsletterForm.invalid) {
      return;
    }

    alert('Success');
    console.table(this.newsletterForm.value);
  }

  /**
   * Method to init the form
   */
  private onInitForm() {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
    const email = this.newsletterForm.get('email');

    email?.valueChanges.subscribe((value) =>
      this.setMessage(email, 'emailMessages')
    );
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
