import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FamiliaService } from '../../familia/FamiliaService.service';
import { UnidadService } from '../../unidadmedida/UnidadService.service';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {

  lstFamilias: any [] = [];
  lstUnidades: any [] = [];
  loading = false;
  formarticulo: FormGroup;

  constructor(private familiaserive: FamiliaService,
              private unidadservice: UnidadService) {

    this.buildForm();
   }

  ngOnInit(): void {
    this.listarFamilias();
    this.listarUnidades();
  }

  private buildForm(){
   
    this.formarticulo = new FormGroup({
      codigo: new FormControl('',[Validators.required]),
      nombre: new FormControl('',[Validators.required]),
      tipoproducto: new FormControl('0',[Validators.required]),
      unidadmedida: new FormControl('0',[Validators.required])
    })
  }

  guardarArticulo(event: Event){
    event.preventDefault();
    const value = this.formarticulo.value;
    console.log(value);
  }

  listarFamilias(){
    this.loading = true;
    this.familiaserive.listarFamilias('')
      .subscribe(response => {
        this.lstFamilias = response as any[];
        console.log(this.lstFamilias);
        this.loading = false;
      });
  }

  listarUnidades(){
    this.loading = true;
    this.unidadservice.listarUnidades('')
      .subscribe(response => {
        this.lstUnidades = response as any[];
        console.log(this.lstUnidades);
        this.loading = false;
      });
  }

}
