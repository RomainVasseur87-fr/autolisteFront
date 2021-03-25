import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurPageComponent } from './utilisateur-page.component';

describe('UtilisateurPageComponent', () => {
  let component: UtilisateurPageComponent;
  let fixture: ComponentFixture<UtilisateurPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
