import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiURL: string = 'https://restcountries.com/v3.1';

  //Injection del Servicios Http private http: HttpClient  
  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${this.apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }
  /*getPaisPorAlpa(id: string): Observable<Country[]> {

    const url = `${this.apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }*/
  getPaisPorAlpa(id: string): Observable<Country> {

    const url = `${this.apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

}
