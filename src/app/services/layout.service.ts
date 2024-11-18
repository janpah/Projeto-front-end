import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private isDarkMode = false;

  constructor() {}

  // Alterna o modo escuro
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    console.log('Modo escuro ativado?', this.isDarkMode); // Verifique o status aqui
  }


  // Retorna o status do modo escuro
  getDarkModeStatus(): boolean {
    return this.isDarkMode;
  }
}
