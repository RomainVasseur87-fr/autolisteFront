import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesRecettesPageComponent } from './mes-recettes-page.component';

describe('MesRecettesPageComponent', () => {
  let component: MesRecettesPageComponent;
  let fixture: ComponentFixture<MesRecettesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesRecettesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesRecettesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
