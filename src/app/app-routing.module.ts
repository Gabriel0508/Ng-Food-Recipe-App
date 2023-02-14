import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsComponent } from './pages/instructions/instructions/instructions.component';
import { RecipesComponent } from './pages/recipes/recipes/recipes.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'instructions', component: InstructionsComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }