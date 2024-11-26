import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  dogs: any[] = []; 
  searchText: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getDogs();
  }



  getDogs(): void {

    const headers = new HttpHeaders({
      'x-api-key': 'live_YTM1JczJwoTp6PclwG3ewAn5PiQdgJrjSo9CbgTEkJOeS8IPb0NSuJmQSE3tJEgA'
    });

    this.http.get<any[]>('https://api.thedogapi.com/v1/breeds', { headers }).subscribe(
      (data) => {
        console.log(data);
        this.dogs = data.slice(0, 50);
      },
      (error) => {
        console.error('Erro ao carregar dados dos cães:', error);
      }
    );
  }
}
