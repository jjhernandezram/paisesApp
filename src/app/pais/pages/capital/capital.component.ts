import { Component, Input } from '@angular/core';
import { RESTPais } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [],
})
export class CapitalComponent {
  hayError: boolean = false;
  termino: string = '';
  paises: RESTPais[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).subscribe(
      (resp) => {
        this.paises = resp;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
  sugerencias(termino: string) {
    this.hayError = false;
  }
}
