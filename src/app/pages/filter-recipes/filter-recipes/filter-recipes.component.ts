import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-recipes',
  templateUrl: './filter-recipes.component.html',
  styleUrls: ['./filter-recipes.component.scss'],
})
export class FilterRecipesComponent implements OnInit {
  autumNum: number = 40;
  springNum: number = 20;
  summerNum: number = 84;
  winterNum: number = 100;

  filteredRecipes = [
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
}
