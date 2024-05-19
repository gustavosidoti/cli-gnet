import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';
import { ListarPrestamosComponent } from '../modules/prestamos/listar-prestamos/listar-prestamos.component';




const routes: Routes = [
    
    {
        path: '', 
        component: PagesComponent,
        //canActivate: [ AuthGuard ],
        children: [
          {
            path: '',
            redirectTo: 'prestamos/listar-prestamos',
            pathMatch: 'full'
          },

            {
                path: 'dashboard',
                loadChildren: () =>
                  import('../modules/prestamos/prestamos.module').then((m) => m.PrestamosModule),
              },
              {
                path: 'usuarios',
                loadChildren: () =>
                  import('../modules/usuarios/usuarios.module').then((m) => m.UsuariosModule),
              },
              {
                path: 'prestamos',
                loadChildren: () =>
                  import('../modules/prestamos/prestamos.module').then((m) => m.PrestamosModule),
              },
              {
                path: 'carreras',
                loadChildren: () =>
                  import('../modules/carreras/carreras.module').then((m) => m.CarrerasModule),
              },
              {
                path: 'elementos',
                loadChildren: () =>
                  import('../modules/elementos/elementos.module').then((m) => m.ElementosModule),
              },
              {
                path: 'personas',
                loadChildren: () =>
                  import('../modules/personas/personas.module').then((m) => m.PersonasModule),
              },
              {
                path: 'reparaciones',
                loadChildren: () =>
                  import('../modules/reparaciones/reparaciones.module').then((m) => m.ReparacionesModule),
              },
              
              {
                path: '**',
                loadChildren: () =>
                  import('../modules/prestamos/prestamos.module').then((m) => m.PrestamosModule),
              },


           /* {path: '', component: PrestamosComponent},
            {path: 'nuevoprestamo', component: AppComponent},
            {path: 'devolucion', component: AppComponent},
            {path: 'usuarios', component: UsuariosComponent},
            */
        ],
        
    },
    {
        path: '**',
        component: ListarPrestamosComponent,
      },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
