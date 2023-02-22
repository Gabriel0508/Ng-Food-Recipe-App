import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsComponent } from './pages/instructions/instructions/instructions.component';
import { RecipesComponent } from './pages/recipes/recipes/recipes.component';
import { LandingModule } from './pages/landing/landing.module';
import { RecipesModule } from './pages/recipes/recipes.module';
import { InstructionsModule } from './pages/instructions/instructions.module';
import { ComponentsModule } from './components/components.module';
import { LoginModule } from './pages/food-login/login.module';
import { LoginComponent } from './pages/food-login/login/login.component';
import { RegisterComponent } from './pages/register-user/register/register.component';
import { RegisterModule } from './pages/register-user/register.module';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    LandingModule,
    RecipesModule,
    InstructionsModule,
    ComponentsModule,
    LoginModule,
    RegisterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
