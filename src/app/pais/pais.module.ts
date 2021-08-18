import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CapitalComponent } from './pages/capital/capital.component';
import { PaisComponent } from './pages/pais/pais.component';
import { RegionComponent } from './pages/region/region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { TablaResultadosComponent } from './components/tabla-resultados/tabla-resultados.component';

@NgModule({
  declarations: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    VerPaisComponent,
    TablaResultadosComponent,
    BusquedaComponent,
  ],
  exports: [CapitalComponent, PaisComponent, RegionComponent, VerPaisComponent],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class PaisModule {}
