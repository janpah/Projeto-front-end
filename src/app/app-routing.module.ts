import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListagemComponent } from './_components/listagem/listagem.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota padrão que carrega o HomeComponent
  {path: 'listagem', component: ListagemComponent }, // Rota da página Listagem
  {path: 'detalhes/:id', component: DetalhesComponent }, //Rota da pagina Detalhes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
