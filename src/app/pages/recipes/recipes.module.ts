import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterRecipesModule } from '../filter-recipes/filter-recipes.module';

@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FilterRecipesModule
  ],
  exports: [
    RecipesComponent
  ]
})
export class RecipesModule { }
