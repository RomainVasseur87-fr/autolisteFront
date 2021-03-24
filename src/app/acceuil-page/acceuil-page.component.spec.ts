import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilPageComponent } from './acceuil-page.component';

describe('AcceuilPageComponent', () => {
  let component: AcceuilPageComponent;
  let fixture: ComponentFixture<AcceuilPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
