import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';

import { PrestamosComponent } from './prestamos/prestamos.component';
import { AppComponent } from '../app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



const routes: Routes = [
    
    {
        path: 'prestamos', 
        component: PagesComponent,
        canActivate: [ AuthGuard ],
        children: [
            {path: '', component: PrestamosComponent},
            {path: 'nuevoprestamo', component: AppComponent},
            {path: 'devolucion', component: AppComponent},
            {path: 'usuarios', component: UsuariosComponent},
            
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
