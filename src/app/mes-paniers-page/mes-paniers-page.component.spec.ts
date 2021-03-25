import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPaniersPageComponent } from './mes-paniers-page.component';

describe('MesPaniersPageComponent', () => {
  let component: MesPaniersPageComponent;
  let fixture: ComponentFixture<MesPaniersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesPaniersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesPaniersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
