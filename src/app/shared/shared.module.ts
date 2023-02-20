import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from '../components/components.module';
import { HeroAreaComponent } from './hero-area/hero-area.component';
import { TrendingComponent } from './trending/trending.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, HeroAreaComponent, TrendingComponent, LoginComponent],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule],
  exports: [HeaderComponent,HeroAreaComponent,TrendingComponent, LoginComponent],
})
export class SharedModule {}
