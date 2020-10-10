import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { CatalogoClienteComponent } from './components/cliente/catalogo-cliente/catalogo-cliente.component';
import { CatalogoVendedorComponent } from './components/vendedor/catalogo-vendedor/catalogo-vendedor.component';
import { ClienteService } from './components/cliente/ClienteService.service';
import { HttpClientModule } from '@angular/common/http';
import { VendedorService } from './components/vendedor/VendedorService.service';
import { CatalogoFormapagoComponent } from './components/formapago/catalogo-formapago/catalogo-formapago.component';
import { FormaPagoService } from './components/formapago/FormaPagoService.service';
import { MainComponent } from './components/main/main.component';
import { CatalogoMovimientoscajaComponent } from './components/movimientoscaja/catalogo-movimientoscaja/catalogo-movimientoscaja.component';
import { CuentasxcobrarComponent } from './components/ventas/cuentasxcobrar/cuentasxcobrar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CatalogoClienteComponent,
    CatalogoVendedorComponent,
    CatalogoFormapagoComponent,
    MainComponent,
    CatalogoMovimientoscajaComponent,
    CuentasxcobrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ClienteService,VendedorService,FormaPagoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
