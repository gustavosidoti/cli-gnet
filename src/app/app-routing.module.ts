import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Módulos
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  
    // path: '/prestamos' PagesRouting
    // path: '/auth' AuthRouting
    {
      path: '',
      //canActivate: [AuthGuard],
      loadChildren: () =>
        import('./pages/pages.module').then((m) => m.PagesModule),
    },
    {
      path: 'carreras',
      //canActivate: [AuthGuard],
      loadChildren: () =>
        import('./pages/pages.module').then((m) => m.PagesModule),
    },
    {
      path: 'elementos',
      //canActivate: [AuthGuard],
      loadChildren: () =>
        import('./pages/pages.module').then((m) => m.PagesModule),
    },
    {
      path: 'personas',
      //canActivate: [AuthGuard],
      loadChildren: () =>
        import('./pages/pages.module').then((m) => m.PagesModule),
    },
    {
      path: 'prestamos',
      //canActivate: [AuthGuard],
      loadChildren: () =>
        import('./pages/pages.module').then((m) => m.PagesModule),
    },
    {
      path: 'reparaciones',
      //canActivate: [AuthGuard],
      loadChildren: () =>
        import('./pages/pages.module').then((m) => m.PagesModule),
    },
    {
      path: 'usuarios',
      //canActivate: [AuthGuard],
      loadChildren: () =>
        import('./pages/pages.module').then((m) => m.PagesModule),
    },
    { path: '**', component: NopagefoundComponent },
  //{path: '', redirectTo: '/prestamos', pathMatch: 'full'},
  //{path: '**', component: NopagefoundComponent}
];

@NgModule({
  imports: [
            RouterModule.forRoot(routes), // forRoot para rutas principales
            AuthRoutingModule,
            PagesRoutingModule
           ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
