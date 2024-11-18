import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value; // Se o valor estiver vazio ou indefinido, retorna ele sem alterações
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(); // Capitaliza a primeira letra
  }

}
