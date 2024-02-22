import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesActiveService {

  //public pageActive:Number = 0;
  public pageActive = new BehaviorSubject<Number>(0);
  public currentDataActive= this.pageActive.asObservable();

  constructor() { }

  public paginaActiva(Page:Number){

    this.pageActive.next(Page); 

  }

  public GetPaginaActiva (){
    return this.pageActive;
  }
}
