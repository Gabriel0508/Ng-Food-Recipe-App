import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss'],
})
export class GenericModalComponent implements OnInit {
  @Input() title: string = '';
  @Output() closeModal = new EventEmitter<boolean>();

  faCloseIcone = faXmark;
  sowModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onCloseModal() {
   this.closeModal.emit(false);
  }
}
