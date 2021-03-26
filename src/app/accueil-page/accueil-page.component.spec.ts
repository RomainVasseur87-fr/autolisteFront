import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilPageComponent } from './accueil-page.component';

describe('accueilPageComponent', () => {
  let component: AccueilPageComponent;
  let fixture: ComponentFixture<AccueilPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
