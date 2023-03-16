import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
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
  }
}
