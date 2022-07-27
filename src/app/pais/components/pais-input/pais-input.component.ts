import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{
  //el evento se activa cuando se da Enter
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

   //el evento se activa cuando se deja de escribir
   @Output() onDebounce: EventEmitter<string> = new EventEmitter();

   debouncer: Subject<string> = new Subject();

  termino: string = '';

  //Solo se ejecuta una sola vez
  ngOnInit(){
    this.debouncer
    .pipe(
      debounceTime(300)
    )        
    .subscribe ( valor => {
      this.onDebounce.emit (valor);
    });
  }

  buscar(){
    this.onEnter.emit(this.termino);
  } 

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
