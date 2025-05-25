import { Component } from '@angular/core';
import { HoleriteService } from '../../core/services/holerite.service';
import { saveAs } from 'file-saver';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ETipoHolerite } from '../../core/enums/EtipoHolerite';

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

tipos = Object.keys(ETipoHolerite)
  .filter(key => !isNaN(Number(key))) // filtra as chaves numéricas
  .map(key => ({
    id: Number(key),
    nome: ETipoHolerite[Number(key)]
  }));

  formatCpf() {
    this.cpf = this.cpf.replace(/\D/g, '')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }


  constructor(private holeriteService: HoleriteService) {}

  onSubmit() {
    if (!this.cpf || !this.tipoHolerite || !this.mesReferencia || !this.anoReferencia) {
      alert('Preencha todos os campos!');
      return;
    }

    const consulta = {
      cpf: this.cpf,
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
