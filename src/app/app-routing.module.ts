import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrestamoDevolucionComponent } from './pages/prestamo-devolucion/prestamo-devolucion.component';
import { PrestamoNuevoComponent } from './pages/prestamo-nuevo/prestamo-nuevo.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';

const routes: Routes = [
  {path: 'home', component: PrestamosComponent },
  {path: 'dashboard', component: PrestamosComponent },
  {path: 'prestamonuevo', component: PrestamoNuevoComponent },
  {path: 'prestamodevolucion', component: PrestamoDevolucionComponent },
  {path: '**', pathMatch: 'full',  redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
