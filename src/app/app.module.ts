import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { CentroRecursosComponent } from './components/centro-recursos/centro-recursos.component';
import { ConectadosFraComponent } from './components/conectados-fra/conectados-fra.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienesSomosComponent,
    CentroRecursosComponent,
    ConectadosFraComponent,
    ContactanosComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
