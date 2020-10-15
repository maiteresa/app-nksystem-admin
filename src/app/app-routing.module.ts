import { CatalogoVendedorComponent } from './components/vendedor/catalogo-vendedor/catalogo-vendedor.component';
import { CatalogoClienteComponent } from './components/cliente/catalogo-cliente/catalogo-cliente.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoFormapagoComponent } from './components/formapago/catalogo-formapago/catalogo-formapago.component';
import { MainComponent } from './components/main/main.component';
import { CatalogoProveedorComponent } from './components/proveedor/catalogo-proveedor/catalogo-proveedor.component';
import { CatalogoFacturaComponent } from './components/factura/catalogo-factura/catalogo-factura.component';
import { CatalogoMovimientoscajaComponent } from './components/movimientoscaja/catalogo-movimientoscaja/catalogo-movimientoscaja.component';
import { CatalogoArticuloComponent } from './components/articulo/catalogo-articulo/catalogo-articulo.component';
import { CatalogoUsuarioComponent } from './components/configuracion/catalogo-usuario/catalogo-usuario.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'ventas/clientes', component: CatalogoClienteComponent},
  { path: 'ventas/vendedores', component: CatalogoVendedorComponent},
  { path: 'ventas/formapagos', component: CatalogoFormapagoComponent},
  { path: 'ventas/proveedores', component: CatalogoProveedorComponent},
  { path: 'ventas/facturas', component: CatalogoFacturaComponent},
  { path: 'ventas/movimientoscaja', component: CatalogoMovimientoscajaComponent},
  { path: 'ventas/articulos', component: CatalogoArticuloComponent},
  { path: 'configuracion/usuario', component: CatalogoUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
