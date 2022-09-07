import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { CentroRecursosComponent } from './components/centro-recursos/centro-recursos.component';
import { ConectadosFraComponent } from './components/conectados-fra/conectados-fra.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';


const routes: Routes = [

  { path: 'inicio', component: InicioComponent},
  { path: 'quienes-somos', component: QuienesSomosComponent},
  { path: 'centro-recursos', component: CentroRecursosComponent},
  { path: 'conectados-fra', component: ConectadosFraComponent},
  { path: 'contactanos', component: ContactanosComponent},
  { path: ' ', pathMatch: 'full', redirectTo: 'inicio'},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
