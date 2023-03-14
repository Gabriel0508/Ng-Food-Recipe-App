import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterRecipesComponent } from './filter-recipes/filter-recipes.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [FilterRecipesComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [FilterRecipesComponent],
})
export class FilterRecipesModule {}
