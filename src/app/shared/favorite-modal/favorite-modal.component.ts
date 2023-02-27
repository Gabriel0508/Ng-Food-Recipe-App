import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-favorite-modal',
  templateUrl: './favorite-modal.component.html',
  styleUrls: ['./favorite-modal.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class FavoriteModalComponent implements OnInit {
  favoriteTitle = 'Favorites';

  @Output() closeModal = new EventEmitter<boolean>();

  favoriteRecipes = [
    {
      recipeImage: 'focacia',
      title: 'Summer Wedgies Tacos',
      ease: 3,
      time: '120-140min',
    },
    {
      recipeImage: 'pizza',
      title: 'Pizza Bagels',
      ease: 1,
      time: '120-140min',
    },
    {
      recipeImage: 'soup',
      title: 'Avocado Soup',
      ease: 1,
      time: '120-140min',
    },
    {
      recipeImage: 'stake',
      title: 'Spicy Sesame Salmon',
      ease: 3,
      time: '120-140min',
    },
    {
      recipeImage: 'pizza',
      title: 'Spicy Sesame Salmon',
      ease: 3,
      time: '120-140min',
    },
    {
      recipeImage: 'soup',
      title: 'Spicy Sesame Salmon',
      ease: 3,
      time: '120-140min',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  /**
   * Method to close the modal
   */
  onCloseModal() {
    this.closeModal.emit(false);
  }
}
