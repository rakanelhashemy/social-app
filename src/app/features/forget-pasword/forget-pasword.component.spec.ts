import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPaswordComponent } from './forget-pasword.component';

describe('ForgetPaswordComponent', () => {
  let component: ForgetPaswordComponent;
  let fixture: ComponentFixture<ForgetPaswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetPaswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
