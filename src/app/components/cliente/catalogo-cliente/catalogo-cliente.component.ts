import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/Cliente.model';
import { ClienteService } from '../ClienteService.service';

@Component({
  selector: 'app-catalogo-cliente',
  templateUrl: './catalogo-cliente.component.html',
  styleUrls: ['./catalogo-cliente.component.css']
})
export class CatalogoClienteComponent implements OnInit {

  loading = false;
  titulo = 'Listado de Clientes';
  lstClientes: Cliente[] = [];

  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 10;
  tableSizes = [3, 6, 9, 12];
  
  constructor(private clienteServicio: ClienteService) { }


  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(){
    this.loading = true;
    this.clienteServicio.listarClientes('')
   .subscribe(response => {
     this.lstClientes = response as Cliente[];
     console.log(this.lstClientes);
     this.loading = false;
   });
 }
 onTableDataChange(event){
  this.page = event;
  this.lstClientes;
}  

onTableSizeChange(event): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.lstClientes;
} 

}
