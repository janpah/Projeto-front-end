import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importe o HttpHeaders

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dogs: any[] = []; // array para armazenar os dados dos cães

  constructor(private http: HttpClient) {}

  isLoggedIn = true; // ou false para testar

  ngOnInit(): void {
    this.getDogs(); // chama o metodo para carregar os dados dos cães
  }

  getDogs(): void {
    // Adicionando o cabeçalho com a chave da API
const headers = new HttpHeaders({
      'x-api-key': 'live_YTM1JczJwoTp6PclwG3ewAn5PiQdgJrjSo9CbgTEkJOeS8IPb0NSuJmQSE3tJEgA' // substituia pela sua chave fornecida pela API
    });

    this.http.get<any[]>('https://api.thedogapi.com/v1/breeds', { headers }).subscribe(
   (data) => {
         console.log(data); // aerifica os dados no console
         this.dogs = data.slice(0, 3); // armazenaa os dados retornados na propriedade 'dogs'
      },
      (error) => {
         console.error('Erro ao carregar dados dos cães:', error); //exibe erro no console
      }
    );
  }
}
