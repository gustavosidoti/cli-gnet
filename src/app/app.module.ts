import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { PrestamoNuevoComponent } from './pages/prestamo-nuevo/prestamo-nuevo.component';
import { PrestamoDevolucionComponent } from './pages/prestamo-devolucion/prestamo-devolucion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PrestamosComponent,
    PrestamoNuevoComponent,
    PrestamoDevolucionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
