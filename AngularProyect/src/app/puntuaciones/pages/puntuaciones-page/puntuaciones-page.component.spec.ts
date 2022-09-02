import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntuacionesPageComponent } from './puntuaciones-page.component';

describe('PuntuacionesPageComponent', () => {
  let component: PuntuacionesPageComponent;
  let fixture: ComponentFixture<PuntuacionesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntuacionesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntuacionesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
