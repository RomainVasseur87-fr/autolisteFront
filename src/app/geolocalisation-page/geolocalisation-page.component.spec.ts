import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocalisationPageComponent } from './geolocalisation-page.component';

describe('GeolocalisationPageComponent', () => {
  let component: GeolocalisationPageComponent;
  let fixture: ComponentFixture<GeolocalisationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeolocalisationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocalisationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
