import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutTemplateComponent } from './layout-template/layout-template.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    LayoutTemplateComponent,
    RecipeCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    LayoutTemplateComponent,
    RecipeCardComponent
  ]
})
export class ComponentsModule { }
