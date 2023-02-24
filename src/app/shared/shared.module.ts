import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from '../components/components.module';
import { HeroAreaComponent } from './hero-area/hero-area.component';
import { TrendingComponent } from './trending/trending.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogAreaComponent } from './blog-area/blog-area.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeaderComponent, HeroAreaComponent, TrendingComponent, BlogAreaComponent, SearchHeaderComponent],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [HeaderComponent,HeroAreaComponent,TrendingComponent, BlogAreaComponent, SearchHeaderComponent],
})
export class SharedModule {}
