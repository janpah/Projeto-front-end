import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dogs: any[] = [];

  constructor(private http: HttpClient) {}

  isLoggedIn = true;

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    // Adicionando o cabeçalho com a chave da API
const headers = new HttpHeaders({
      'x-api-key': 'live_YTM1JczJwoTp6PclwG3ewAn5PiQdgJrjSo9CbgTEkJOeS8IPb0NSuJmQSE3tJEgA'
    });

    this.http.get<any[]>('https://api.thedogapi.com/v1/breeds', { headers }).subscribe(
   (data) => {
         console.log(data);
         this.dogs = data.slice(0, 3);
      },
      (error) => {
         console.error('Erro ao carregar dados dos cães:', error); 
      }
    );
  }
}
