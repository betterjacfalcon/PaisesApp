import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiURL:string = 'https://restcountries.com/v3.1';

  //Injection del Servicios Http private http: HttpClient  
  constructor(private http: HttpClient) { }

  buscarPais( termino: string):Observable<any> {
  
      const url = `${this.apiURL}/name/${ termino}`;
      return this.http.get(url);
  }
}
