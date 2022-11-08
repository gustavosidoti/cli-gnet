import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private usuarioService: UsuarioService ) { }

  logout(){
    this.usuarioService.logout();
  }

}
