import { Component, OnInit } from '@angular/core';
import { FormaPago } from '../../model/FormaPago.model';
import { FormaPagoService } from '../FormaPagoService.service';

@Component({
  selector: 'app-catalogo-formapago',
  templateUrl: './catalogo-formapago.component.html',
  styleUrls: ['./catalogo-formapago.component.css']
})
export class CatalogoFormapagoComponent implements OnInit {

  loading = false;
  titulo = 'Listado de Forma Pagos';
  lstFormaPagos: FormaPago[] = [];
  constructor(private formaPagoService: FormaPagoService) { }

  ngOnInit(): void {
    this.listarFormaPagos();
  }

  listarFormaPagos(){
    this.loading = true;
    this.formaPagoService.listarFormaPagos('')
   .subscribe(response => {
     this.lstFormaPagos = response as FormaPago[];
     console.log(this.lstFormaPagos);
     this.loading = false;
   });
 }

}
