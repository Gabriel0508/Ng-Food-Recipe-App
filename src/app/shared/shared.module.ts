import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from '../components/components.module';
import { HeroAreaComponent } from './hero-area/hero-area.component';
import { TrendingComponent } from './trending/trending.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [HeaderComponent, HeroAreaComponent, TrendingComponent, BlogComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [HeaderComponent,HeroAreaComponent,TrendingComponent, BlogComponent],
})
export class SharedModule {}
