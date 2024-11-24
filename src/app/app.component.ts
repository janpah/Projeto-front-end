import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LayoutService } from './services/layout.service'; // Importe o LayoutService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Meu Aplicativo de Cães'; // Título do aplicativo
  dogs: any[] = []; // Array vazio para armazenar os dados dos cães

  constructor(private http: HttpClient, private layoutService: LayoutService) {} // Injetando o LayoutService

  ngOnInit(): void {
    this.getDogs(); // Chama o método para carregar os dados dos cães
  }

  getDogs(): void {
    this.http.get<any[]>('https://api.thedogapi.com/v1/breeds').subscribe(
      (data) => {
        this.dogs = data; // Armazena os dados retornados na propriedade 'dogs'
      },
      (error) => {
        console.error('Erro ao carregar dados dos cães:', error);
      }
    );
  }

  // Método para alternar o modo escuro
  toggleDarkMode(): void {
    this.layoutService.toggleDarkMode();
    console.log('Modo Escuro:', this.layoutService.getDarkModeStatus());
  }
}
