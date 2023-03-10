import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-article-blog',
  templateUrl: './small-article-blog.component.html',
  styleUrls: ['./small-article-blog.component.scss']
})
export class SmallArticleBlogComponent {

  @Input() imageLink: string = "../../../assets/background/smallarticle1.png";
  @Input() date: string = "May 20, 2019";
  @Input() title: string = "Our recipe blog";
  @Input() excerpt: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

}
