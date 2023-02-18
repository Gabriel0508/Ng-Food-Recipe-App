import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from '../components/components.module';
import { HeroAreaComponent } from './hero-area/hero-area.component';
import { TrendingComponent } from './trending/trending.component';

@NgModule({
  declarations: [HeaderComponent, HeroAreaComponent, TrendingComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [HeaderComponent,HeroAreaComponent,TrendingComponent],
})
export class SharedModule {}
