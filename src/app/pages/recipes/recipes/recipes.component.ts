import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  isOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onOpenModal(showModal: boolean) {
    this.isOpen = true;
  }

  onCloseModal(closeModal: boolean) {
    this.isOpen = false;
  }
}
