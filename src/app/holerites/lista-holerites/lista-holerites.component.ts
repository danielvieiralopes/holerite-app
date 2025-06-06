import { Component, ViewChild, ElementRef } from '@angular/core';
import { HoleriteService } from '../../core/services/holerite.service';
import { saveAs } from 'file-saver';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ETipoHolerite } from '../../core/enums/EtipoHolerite';
import { Holerite } from '../../core/models/holerite';

@Component({
  selector: 'app-lista-holerites',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-holerites.component.html',
})
export class ListaHoleritesComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(private holeriteService: HoleriteService) {}

  // Propriedades para consulta de holerite
  cpf = '';
  dataNascimento = '';
  termoPesquisa = '';
  tipoHolerite?: number;
  mesReferencia?: number;
  anoReferencia?: number;
  holerites: Holerite[] = [];

  tipos = Object.keys(ETipoHolerite)
    .filter((key) => !isNaN(Number(key)))
    .map((key) => ({
      id: Number(key),
      nome: ETipoHolerite[Number(key)],
    }));
  holeritesFiltrados: any;
  holeriteEditandoId: any;
  holeriteEditadoTemp: any;
  nomeFuncionario: any;
  dataDeRegistro: any;

  ngOnInit() {
    this.carregarHolerites();
  }

  carregarHolerites() {
     this.holeriteService.listarHolerites().subscribe({
      next: (data) => {
         this.holerites = data.map(response => ({
              id: response.id,
              nomeFuncionario: response.nomeFuncionario,
              cpf: response.cpf,
              mesReferencia: response.mesReferencia,
              anoReferencia: response.anoReferencia,
              tipoHolerite: response.tipoHolerite,
              dataDeRegistro: response.dataUpload
            }));
        this.filtrarHolerites();
      },
      error: (err) => alert('Erro ao carregar holerites')
    });
  }

  formatCpf() {
    this.cpf = this.cpf
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  filtrarHolerites() {
  const termo = this.termoPesquisa.toLowerCase();
  const mes = this.mesReferencia;
  const ano = this.anoReferencia;
  const tipo = this.tipoHolerite;

  this.holeritesFiltrados = this.holerites.filter(h => {
    const nomeMatch = h.nomeFuncionario.toLowerCase().includes(termo);
    const mesMatch = mes ? h.mesReferencia === mes : true;
    const anoMatch = ano ? h.anoReferencia === ano : true;
    const tipoMatch = tipo ? h.tipoHolerite === tipo : true;

    return nomeMatch && mesMatch && anoMatch && tipoMatch;
  });
}

  baixarHolerite(holerite: Holerite) {
    this.holeriteService.consultaHolerite({
      cpf: holerite.cpf,
      tipoHolerite: holerite.tipoHolerite,
      mesReferencia: holerite.mesReferencia,
      anoReferencia: holerite.anoReferencia
    }).subscribe(blob => {
      saveAs(blob, `holerite_${holerite.nomeFuncionario}_${holerite.mesReferencia}_${holerite.anoReferencia}.pdf`);
    });
  }

  excluirHolerite(id: number) {
    if (!confirm('Tem certeza que deseja excluir este holerite?')) {
      return;
    }
    this.holeriteService.excluirHolerite(id).subscribe({
      next: () => {
        alert('Holerite excluído com sucesso');
        this.carregarHolerites();
      },
      error: (err) => alert('Erro ao excluir holerite')
    });
  }

  abrirSeletorArquivo(holerite: Holerite) {
    this.holeriteEditandoId = holerite.id;
    this.mesReferencia = holerite.mesReferencia;
    this.anoReferencia = holerite.anoReferencia;
    this.tipoHolerite = holerite.tipoHolerite;
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any, holerite: Holerite) {
    const file: File = event.target.files[0];
    if (file) {
      this.atualizarHolerite(holerite.id, file);
    }
  }

  atualizarHolerite(id: number, file: File) {
    if (this.mesReferencia === undefined || this.anoReferencia === undefined || this.tipoHolerite === undefined) {
      console.error('Mês, ano e tipo de referência são obrigatórios para atualizar o holerite.');
      return;
    }

    this.holeriteService.atualizarHolerite(id, file, this.mesReferencia, this.anoReferencia, this.tipoHolerite).subscribe({
      next: (response) => {
        alert('Holerite atualizado com sucesso!');
        this.carregarHolerites();
      },
      error: (error) => {
        console.error('Erro ao atualizar holerite:', error);
        alert('Erro ao atualizar holerite.');
      }
    });
  }

  getTipoHoleriteNome(tipoHolerite: number): string {
    return ETipoHolerite[tipoHolerite];
  }
}
