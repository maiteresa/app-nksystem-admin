import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArticulo'
})
export class FilterArticuloPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultclientes = [];
    try {
      for (const Articulos of value) {
        if (Articulos.nomarticulo.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          resultclientes.push(Articulos);
        }
      }
    }
    catch (err) { }
    return resultclientes;
  }
}
