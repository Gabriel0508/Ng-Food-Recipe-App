import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-area',
  templateUrl: './hero-area.component.html',
  styleUrls: ['./hero-area.component.scss'],
})
export class HeroAreaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  /**
   * Method to navigate
   */
  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
