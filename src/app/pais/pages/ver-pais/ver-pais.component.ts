import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { RESTPais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: RESTPais;

  constructor(
    private paisService: PaisService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.verPais(id)))
      .subscribe((resp) => {
        this.pais = resp;
      });

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);
    //   this.paisService.verPais(id).subscribe((resp) => {
    //     console.log(resp);
    //   });
    // });
  }
}
