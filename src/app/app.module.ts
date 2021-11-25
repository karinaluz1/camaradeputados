import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { AppRoutingModule } from './app.routing.module';
import { CartaoComponent } from './consultas/cartao/cartao.component';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultasComponent,
    CartaoComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
