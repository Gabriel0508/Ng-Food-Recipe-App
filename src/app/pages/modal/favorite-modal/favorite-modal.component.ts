import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favorite-modal',
  templateUrl: './favorite-modal.component.html',
  styleUrls: ['./favorite-modal.component.scss'],
})
export class FavoriteModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();
  faXmarkIcon = faXmark;

  favoriteRecipes = [ 
    {
      recipeImage: 'focacia',
      title: 'Summer Wedgies Tacos',
      ease: 3,
      time: '120-140min'
    },
    {
      recipeImage: 'pizza',
      title: 'Pizza Bagels',
      ease: 1,
      time: '120-140min'
    },
    {
      recipeImage: 'soup',
      title: 'Avocado Soup',
      ease: 1,
      time: '120-140min'
    },
    {
      recipeImage: 'stake',
      title: 'Spicy Sesame Salmon',
      ease: 3,
      time: '120-140min'
    },
    {
      recipeImage: 'pizza',
      title: 'Spicy Sesame Salmon',
      ease: 3,
      time: '120-140min'
    },{
      recipeImage: 'soup',
      title: 'Spicy Sesame Salmon',
      ease: 3,
      time: '120-140min'
    }
  ]

  constructor() {}

  ngOnInit(): void {}
  
  /**
   * Method to close the modal
   */
  onCloseModal() {
    this.closeModal.emit(false);
  }
}
