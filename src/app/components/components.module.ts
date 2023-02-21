import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutTemplateComponent } from './layout-template/layout-template.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LargeArticleBlogComponent } from './large-article-blog/large-article-blog.component';
import { SmallArticleBlogComponent } from './small-article-blog/small-article-blog.component';



@NgModule({
  declarations: [
    LayoutTemplateComponent,
    RecipeCardComponent,
    LargeArticleBlogComponent,
    SmallArticleBlogComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    LayoutTemplateComponent,
    RecipeCardComponent,
    LargeArticleBlogComponent,
    SmallArticleBlogComponent
  ]
})
export class ComponentsModule { }
