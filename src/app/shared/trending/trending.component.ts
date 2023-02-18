import { Component } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent {
  trendingRecipes = [ 
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
    }
  ]
}
