import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dogs: any[] = []; // Array para armazenar os dados dos cães

  constructor(private http: HttpClient) {}

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
}
