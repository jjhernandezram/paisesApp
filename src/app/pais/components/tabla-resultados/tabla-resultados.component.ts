import { Component, Input } from '@angular/core';
import { RESTPais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-tabla-resultados',
  templateUrl: './tabla-resultados.component.html',
  styles: [],
})
export class TablaResultadosComponent {
  @Input() paises: RESTPais[] = [];
  constructor() {}
}
