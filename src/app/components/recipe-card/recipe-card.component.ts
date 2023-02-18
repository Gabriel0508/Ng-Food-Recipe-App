import { Component, Input } from '@angular/core';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  faCookieBite = faCookieBite;

  @Input() recipeImage: string = 'soup';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() ease: number = 1;  
  @Input() time: string = '120-140min';
}
