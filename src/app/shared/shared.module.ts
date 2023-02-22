import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from '../components/components.module';
import { HeroAreaComponent } from './hero-area/hero-area.component';
import { TrendingComponent } from './trending/trending.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogAreaComponent } from './blog-area/blog-area.component';

@NgModule({
  declarations: [HeaderComponent, HeroAreaComponent, TrendingComponent, BlogAreaComponent],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule],
  exports: [HeaderComponent,HeroAreaComponent,TrendingComponent, BlogAreaComponent],
})
export class SharedModule {}
