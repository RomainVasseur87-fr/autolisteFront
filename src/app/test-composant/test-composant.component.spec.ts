import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComposantComponent } from './test-composant.component';

describe('TestComposantComponent', () => {
  let component: TestComposantComponent;
  let fixture: ComponentFixture<TestComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComposantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
