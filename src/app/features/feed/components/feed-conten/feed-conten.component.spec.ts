import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedContenComponent } from './feed-conten.component';

describe('FeedContenComponent', () => {
  let component: FeedContenComponent;
  let fixture: ComponentFixture<FeedContenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedContenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedContenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
