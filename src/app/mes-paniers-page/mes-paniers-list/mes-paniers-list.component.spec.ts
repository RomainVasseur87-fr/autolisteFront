import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPaniersListComponent } from './mes-paniers-list.component';

describe('MesPaniersListComponent', () => {
  let component: MesPaniersListComponent;
  let fixture: ComponentFixture<MesPaniersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesPaniersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesPaniersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
