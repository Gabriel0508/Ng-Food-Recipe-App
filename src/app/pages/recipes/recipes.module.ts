import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { ModalModule } from '../modal/modal.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    SharedModule
  ],
  exports: [
    RecipesComponent
  ]
})
export class RecipesModule { }
