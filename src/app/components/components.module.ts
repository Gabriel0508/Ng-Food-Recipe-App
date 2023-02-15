import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutTemplateComponent } from './layout-template/layout-template.component';



@NgModule({
  declarations: [
    LayoutTemplateComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LayoutTemplateComponent
  ]
})
export class ComponentsModule { }
