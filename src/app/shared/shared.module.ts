import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from '../components/components.module';
import { HeroAreaComponent } from './hero-area/hero-area.component';

@NgModule({
  declarations: [HeaderComponent, HeroAreaComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [HeaderComponent,HeroAreaComponent],
})
export class SharedModule {}
