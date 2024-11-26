import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  dog: any = {};

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getDogDetails(id);
    }
  }

  // Método para pegar os detalhes de uma raça
  getDogDetails(id: string): void {
    const headers = new HttpHeaders({
      'x-api-key': 'live_YTM1JczJwoTp6PclwG3ewAn5PiQdgJrjSo9CbgTEkJOeS8IPb0NSuJmQSE3tJEgA'
    });

    this.http.get<any>(`https://api.thedogapi.com/v1/breeds/${id}`, { headers }).subscribe(
      (data) => {
        console.log(data);
        this.dog = data;
      },
      (error) => {
        console.error('Erro ao carregar detalhes do cão:', error); 
      }
    );
  }
}

