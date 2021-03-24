import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCommandesPageComponent } from './mes-commandes-page.component';

describe('MesCommandesPageComponent', () => {
  let component: MesCommandesPageComponent;
  let fixture: ComponentFixture<MesCommandesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesCommandesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesCommandesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
