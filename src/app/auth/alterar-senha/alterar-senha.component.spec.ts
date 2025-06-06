import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarSenhaComponent } from './alterar-senha.component';

describe('AlterarSenhaComponent', () => {
  let component: AlterarSenhaComponent;
  let fixture: ComponentFixture<AlterarSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterarSenhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
