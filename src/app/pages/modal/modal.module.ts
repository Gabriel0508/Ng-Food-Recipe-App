import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteModalComponent } from './favorite-modal/favorite-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [FavoriteModalComponent],
  imports: [CommonModule, FontAwesomeModule, ComponentsModule],
  exports: [FavoriteModalComponent],
})
export class ModalModule {}
