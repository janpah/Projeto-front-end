import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchText: string): any[] {
    if (!value || !searchText) {
      return value; // Retorna a lista completa se não houver filtro
    }

    // Converte o texto de pesquisa para minúsculo para não diferenciar maiúsculas de minúsculas
    const lowerCaseSearchText = searchText.toLowerCase();

    return value.filter(item =>
      item.name.toLowerCase().includes(lowerCaseSearchText) // Compara o nome da raça com o texto de pesquisa
    );
  }
}
