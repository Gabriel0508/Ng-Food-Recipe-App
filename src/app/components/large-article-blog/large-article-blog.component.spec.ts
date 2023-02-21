import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeArticleBlogComponent } from './large-article-blog.component';

describe('LargeArticleBlogComponent', () => {
  let component: LargeArticleBlogComponent;
  let fixture: ComponentFixture<LargeArticleBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeArticleBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeArticleBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
