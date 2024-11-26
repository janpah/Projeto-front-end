import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LayoutService } from './services/layout.service'; // Importe o LayoutService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Meu Aplicativo de Cães'; 
  dogs: any[] = [];

  constructor(private http: HttpClient, private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.http.get<any[]>('https://api.thedogapi.com/v1/breeds').subscribe(
      (data) => {
        this.dogs = data;
      },
      (error) => {
        console.error('Erro ao carregar dados dos cães:', error);
      }
    );
  }


  toggleDarkMode(): void {
    this.layoutService.toggleDarkMode();
    console.log('Modo Escuro:', this.layoutService.getDarkModeStatus());
  }
}
