import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.scss']
})
export class BlogAreaComponent {
  articles = [
    {
      imageLink: '../../../assets/background/smallarticle1.png',
      date: 'May 20, 2019',
      title: 'Our recipe blog',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      imageLink: '../../../assets/background/smallarticle2.png',
      date: 'May 20, 2019',
      title: 'Our recipe blog',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      imageLink: '../../../assets/background/smallarticle3.png',
      date: 'May 20, 2019',
      title: 'Our recipe blog',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  goToArticlesPage() {
    console.log('go to articles page');
  }
}
