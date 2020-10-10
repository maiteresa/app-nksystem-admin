import { CatalogoVendedorComponent } from './components/vendedor/catalogo-vendedor/catalogo-vendedor.component';
import { CatalogoClienteComponent } from './components/cliente/catalogo-cliente/catalogo-cliente.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoFormapagoComponent } from './components/formapago/catalogo-formapago/catalogo-formapago.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'ventas/clientes', component: CatalogoClienteComponent},
  { path: 'ventas/vendedores', component: CatalogoVendedorComponent},
  { path: 'ventas/formapagos', component: CatalogoFormapagoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
