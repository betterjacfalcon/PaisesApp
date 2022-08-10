import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap} from 'rxjs/operators'; //switchMap - recibe un observable y regresa un observable --tap - un operador que dispara un efecto secundario
import { PaisService } from '../../services/pais.service';
import { Country} from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activedRote: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    this.activedRote.params
        .pipe(
         switchMap(({id }) => this.paisService.getPaisPorAlpa(id)),         
         tap (console. log) //devuelve lo que se obtubo de switcMap
        )
        .subscribe( pais =>   this.pais = pais[0]);    
  }

}
