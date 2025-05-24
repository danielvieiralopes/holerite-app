import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroHoleriteComponent } from './cadastro-holerite.component';

describe('CadastroHoleriteComponent', () => {
  let component: CadastroHoleriteComponent;
  let fixture: ComponentFixture<CadastroHoleriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroHoleriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroHoleriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
