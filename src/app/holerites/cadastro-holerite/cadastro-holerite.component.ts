import { Component } from '@angular/core';
import { HoleriteService } from '../../core/services/holerite.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-holerite',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-holerite.component.html',
  styleUrl: './cadastro-holerite.component.css'
})
export class CadastroHoleriteComponent {
  file?: File;
  mesReferencia?: number;
  anoReferencia?: number;
  tipoHolerite?: number;

  tipos = [
    { id: 1, nome: 'Salario' },
    { id: 2, nome: 'Adiantamento' },
    { id: 3, nome: 'Ferias' },
    { id: 4, nome: 'DecimoTerceiro' },
    { id: 5, nome: 'Outros' }
  ];

  constructor(private holeriteService: HoleriteService) {}

  onFileSelected(event: any) {
    this.file = (event.target as HTMLInputElement).files?.[0];
  }

  onSubmit() {
    if (!this.file || !this.mesReferencia || !this.anoReferencia || !this.tipoHolerite) {
      alert('Preencha todos os campos!');
      return;
    }

    this.holeriteService.uploadHolerite(this.file, this.mesReferencia, this.anoReferencia, this.tipoHolerite)
      .subscribe({
        next: () => alert('Holerite salvo.'),
        error: () => alert('Erro ao enviar holerite.')
      });
  }
}
