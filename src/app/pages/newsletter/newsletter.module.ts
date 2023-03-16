import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewsletterComponent],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule],
  exports: [NewsletterComponent]
})
export class NewsletterModule {}
