import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importação do HttpClientModule
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module'; // Importação do módulo de roteamento
import { ListagemComponent } from './_components/listagem/listagem.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { HoverSizeDirective } from './directives/hover-size.directive';
import { HighlightDirective } from './highlight.directive';
import { ShowIfLoggedDirective } from './show-if-logged.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListagemComponent,
    DetalhesComponent,
    HoverSizeDirective,
    HighlightDirective,
    ShowIfLoggedDirective,
    CapitalizePipe,
    FilterPipe,




  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Adiciona o HttpClientModule aqui
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
