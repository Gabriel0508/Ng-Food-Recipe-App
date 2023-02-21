import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallArticleBlogComponent } from './small-article-blog.component';

describe('SmallArticleBlogComponent', () => {
  let component: SmallArticleBlogComponent;
  let fixture: ComponentFixture<SmallArticleBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallArticleBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallArticleBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
