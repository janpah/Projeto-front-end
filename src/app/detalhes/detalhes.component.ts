import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; // Importante para capturar o ID da raça

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  dog: any = {}; // Armazena os detalhes de uma raça de cachorro

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute // Roteador para pegar o ID da raça na URL
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Pega o ID da raça da URL
    if (id) {
      this.getDogDetails(id); // Chama o método para pegar os detalhes
    }
  }

  // Método para pegar os detalhes de uma raça
  getDogDetails(id: string): void {
    const headers = new HttpHeaders({
      'x-api-key': 'live_YTM1JczJwoTp6PclwG3ewAn5PiQdgJrjSo9CbgTEkJOeS8IPb0NSuJmQSE3tJEgA' // Substitua com a sua chave da API
    });

    this.http.get<any>(`https://api.thedogapi.com/v1/breeds/${id}`, { headers }).subscribe(
      (data) => {
        console.log(data); // Exibe os dados no console
        this.dog = data; // Armazena os dados da raça na propriedade 'dog'
      },
      (error) => {
        console.error('Erro ao carregar detalhes do cão:', error); // Caso ocorra erro
      }
    );
  }
}
 
