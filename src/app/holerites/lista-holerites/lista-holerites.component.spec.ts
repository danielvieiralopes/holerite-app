import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHoleritesComponent } from './lista-holerites.component';

describe('ListaHoleritesComponent', () => {
  let component: ListaHoleritesComponent;
  let fixture: ComponentFixture<ListaHoleritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaHoleritesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaHoleritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
