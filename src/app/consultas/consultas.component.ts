import { HttpClient } from '@angular/common/http';
import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  deputados!:any
  links!:any
  nomeDeputado:string = ""
  partidoDeputado:string = ""
  estadoDeputado:string = ""
  sexoDeputado:string = ""
  getDeputados(url:string) {
    let params = `&nome=${this.nomeDeputado}&siglaUf=${this.estadoDeputado}&siglaSexo=${this.sexoDeputado}&siglaPartido=${this.partidoDeputado}`
   this.http.get(url + params, {responseType:"json"})
   .subscribe((data:any)=>{
    this.deputados = data.dados
    this.links = data.links
    let arr:any[]= []

  })
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
}
