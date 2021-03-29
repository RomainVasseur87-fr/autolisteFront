import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationPageComponent } from './inspiration-page.component';

describe('InspirationPageComponent', () => {
  let component: InspirationPageComponent;
  let fixture: ComponentFixture<InspirationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspirationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspirationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
