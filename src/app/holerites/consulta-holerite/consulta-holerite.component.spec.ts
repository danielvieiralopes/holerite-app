import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaHoleriteComponent } from './consulta-holerite.component';

describe('ConsultaHoleriteComponent', () => {
  let component: ConsultaHoleriteComponent;
  let fixture: ComponentFixture<ConsultaHoleriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaHoleriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaHoleriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
