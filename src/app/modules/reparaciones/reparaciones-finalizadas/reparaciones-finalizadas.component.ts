import { Component, NgModule, OnInit } from '@angular/core';
import { PagesActiveService } from 'src/app/services/pages-active.service';
import { MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

export const CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-reparaciones-finalizadas',
  templateUrl: './reparaciones-finalizadas.component.html',
  styleUrls: ['./reparaciones-finalizadas.component.css']
})
export class ReparacionesFinalizadasComponent implements OnInit {

  selectedDate: Date | null = null;
  selectedDate2: Date | null = null;

  constructor(public pageActive: PagesActiveService) { }

  ngOnInit(): void {

    this.pageActive.paginaActiva(6);
  }






}


