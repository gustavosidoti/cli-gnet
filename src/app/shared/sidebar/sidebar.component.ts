import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { PagesActiveService } from '../../services/pages-active.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  public isActive:Number = 0;

  constructor( private usuarioService: UsuarioService,
                public pageActiveService: PagesActiveService,
                public router: Router, ) { }

  ngOnInit(): void {
    
    this.pageActiveService.currentDataActive.subscribe((resp:any) => {
      this.isActive = resp;
    });
    
  }

  

  logout(){
    this.usuarioService.logout();
  }

}
