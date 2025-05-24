import { Component } from '@angular/core';
import { HoleriteService } from '../../core/services/holerite.service';
import { saveAs } from 'file-saver';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta-holerite',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './consulta-holerite.component.html',
})
export class ConsultaHoleriteComponent {
  cpf = '';
  dataNascimento = '';
  tipoHolerite?: number;
  mesReferencia?: number;
  anoReferencia?: number;

  tipos = [
    { id: 1, nome: 'Salario' },
    { id: 2, nome: 'Adiantamento' },
    { id: 3, nome: 'Ferias' },
    { id: 4, nome: 'DecimoTerceiro' },
    { id: 5, nome: 'Outros' }
  ];

  constructor(private holeriteService: HoleriteService) {}

  onSubmit() {
    if (!this.cpf || !this.dataNascimento || !this.tipoHolerite || !this.mesReferencia || !this.anoReferencia) {
      alert('Preencha todos os campos!');
      return;
    }

    const consulta = {
      cpf: this.cpf,
      dataNascimento: this.dataNascimento,
      tipoHolerite: this.tipoHolerite,
      mesReferencia: this.mesReferencia,
      anoReferencia: this.anoReferencia
    };

    this.holeriteService.consultaHolerite(consulta).subscribe({
      next: (blob) => {
        saveAs(blob, 'holerite.pdf');
      },
      error: () => alert('Erro ao consultar holerite.')
    });
  }
}
