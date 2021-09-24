import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { RESTPais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `
      span {
        margin-top: -4px;
        margin-bottom: -4px;
      }
    `,
  ],
})
export class RegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: RESTPais[] = [];

  constructor(private paisService: PaisService) {}

  activarRegion(region: string) {
    if (this.regionActiva === region) return;
    this.regionActiva = region;
    this.paisService.buscarRegion(region).subscribe((resp) => {
      this.paises = resp;
      console.log(this.paises);
    });
  }

  claseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
