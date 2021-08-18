import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { RESTPais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PaisComponent {
  termino: string = '';
  hayError: boolean = false;
  mostrarSugerencias: boolean = false;
  paises: RESTPais[] = [];
  paisesSugeridos: RESTPais[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(
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
    this.mostrarSugerencias = true;
    this.termino = termino;

    this.paisService.buscarPais(termino).subscribe(
      (paises) => (this.paisesSugeridos = paises.splice(0, 5)),
      (err) => {
        this.paisesSugeridos = [];
        this.hayError = false;
      }
    );
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
    this.mostrarSugerencias = false;
  }
}
