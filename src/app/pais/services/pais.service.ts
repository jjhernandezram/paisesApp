import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RESTPais } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _apiUrl: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,alpha2Code,flags,population'
    );
  }
  constructor(private http: HttpClient) {}

  buscarPais(query: string): Observable<RESTPais[]> {
    const url: string = `${this._apiUrl}/name/${query}`;
    return this.http.get<RESTPais[]>(url, { params: this.httpParams });
  }

  buscarCapital(query: string): Observable<RESTPais[]> {
    const url: string = `${this._apiUrl}/capital/${query}`;
    return this.http.get<RESTPais[]>(url, { params: this.httpParams });
  }

  buscarRegion(query: string): Observable<RESTPais[]> {
    const url: string = `${this._apiUrl}/continent/${query}`;
    return this.http.get<RESTPais[]>(url, { params: this.httpParams });
  }

  verPais(query: string): Observable<RESTPais> {
    const url: string = `${this._apiUrl}/alpha/${query}`;
    return this.http.get<RESTPais>(url);
  }
}
