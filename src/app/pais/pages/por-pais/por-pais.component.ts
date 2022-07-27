import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino:string = '';
  hayError:boolean = false;
  paises: Country[] = [];

  //Injection del Servicios Pais => private paisService: PaisService 
  constructor(private paisService: PaisService) { }
  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    
    //Para que un Observable se active se requiere un subscribe
    this.paisService.buscarPais(this.termino)
    .subscribe( paises => {
      console.log(paises);  
      this.paises = paises;   
    }, (err) =>{
      this.hayError = true;
      this.paises = [];
    })
  } 

  sugerencia(termino:string){
    this.hayError = false;
    //TODO: crear sugerencias
  }
}
