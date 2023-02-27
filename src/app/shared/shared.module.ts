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
import { GenericModalComponent } from './generic-modal/generic-modal.component';
import { FavoriteModalComponent } from './favorite-modal/favorite-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HeaderComponent, HeroAreaComponent, TrendingComponent, BlogAreaComponent, SearchHeaderComponent, GenericModalComponent, FavoriteModalComponent],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule, FontAwesomeModule, ComponentsModule, BrowserAnimationsModule],
  exports: [HeaderComponent,HeroAreaComponent,TrendingComponent, BlogAreaComponent, SearchHeaderComponent, FavoriteModalComponent],
})
export class SharedModule {}
