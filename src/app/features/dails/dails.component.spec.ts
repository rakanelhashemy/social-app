import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailsComponent } from './dails.component';

describe('DailsComponent', () => {
  let component: DailsComponent;
  let fixture: ComponentFixture<DailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
