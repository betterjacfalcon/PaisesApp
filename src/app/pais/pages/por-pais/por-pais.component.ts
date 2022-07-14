import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino:string = '';

  //Injection del Servicios Pais => private paisService: PaisService 
  constructor(private paisService: PaisService) { }
  buscar(){
    console.log(this.termino);
    //Para que un Observable se active se requiere un Observable
    this.paisService.buscarPais(this.termino)
    .subscribe( resp => {
      console.log(resp);
    })
  } 

}
