import { Component, ElementRef, ViewChild } from '@angular/core';
import { HoleriteService } from '../../core/services/holerite.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ETipoHolerite } from '../../core/enums/EtipoHolerite';

@Component({
  selector: 'app-cadastro-holerite',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-holerite.component.html'
})
export class CadastroHoleriteComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;

  showMessage = false;
  progress = 100;
  intervalId: any;

  file?: File;
  mesReferencia?: number;
  anoReferencia?: number;
  tipoHolerite?: number;

tipos = Object.keys(ETipoHolerite)
  .filter(key => !isNaN(Number(key))) // filtra as chaves numéricas
  .map(key => ({
    id: Number(key),
    nome: ETipoHolerite[Number(key)]
  }));


  mensagem: string | undefined;

  constructor(private holeriteService: HoleriteService) {}

  onFileSelected(event: any) {
    this.file = (event.target as HTMLInputElement).files?.[0];
  }

  onSubmit(form: NgForm) {
    if (!this.file || !this.mesReferencia || !this.anoReferencia || !this.tipoHolerite) {
      alert('Preencha todos os campos!');
      return;
    }

    this.holeriteService.uploadHolerite(this.file, this.mesReferencia, this.anoReferencia, this.tipoHolerite).subscribe({
      next: () => this.mensagem = 'Holerite enviado com sucesso!',
      error: () => this.mensagem = 'Erro ao enviar holerite.'
    });

    this.fileInput.nativeElement.value = '';
    form.resetForm();
    this.showMessage = true;
    this.progress = 100;

    // Anula qualquer timer anterior
    if (this.intervalId) clearInterval(this.intervalId);

    const totalDuration = 3000; // 3 segundos
    const stepTime = 50;        // a cada 50ms atualiza barra
    const stepCount = totalDuration / stepTime;
    let currentStep = 0;

    this.intervalId = setInterval(() => {
      currentStep++;
      this.progress = 100 - (currentStep / stepCount) * 100;

      if (currentStep >= stepCount) {
        clearInterval(this.intervalId);
        this.showMessage = false;
      }
    }, stepTime);
  }
}

