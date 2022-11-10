import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Módulos
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  
    // path: '/prestamos' PagesRouting
    // path: '/auth' AuthRouting
  {path: '', redirectTo: '/prestamos', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent}
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
