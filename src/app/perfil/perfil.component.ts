import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  id!:any
  deputado!:any
  proximoEvento!:any
  ultimoEvento!:any
  getDeputado(id:string) {
    this.http.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`, {responseType:"json"})
   .subscribe((data:any)=>{
     console.log(data)
    this.deputado = data.dados

  })
  }

  getproximoEvento(id:string) {
    const params = `&dataInicio=${new Date().toISOString().slice(0,10)}&itens=1&ordem=ASC&ordenarPor=dataHoraInicio`
    this.http.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/eventos?${params}`, {responseType:"json"})
   .subscribe((data:any)=>{
     console.log(data)
    this.proximoEvento = data.dados[0]

  })
  }

  getultimoEvento(id:string) {
    const params = `&dataFim=${new Date().toISOString().slice(0,10)}&itens=1&ordem=DESC&ordenarPor=dataHoraFim`
    this.http.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/eventos?${params}`, {responseType:"json"})
   .subscribe((data:any)=>{
     console.log(data)
    this.ultimoEvento = data.dados[0]

  })
  }

  converteData(data:any) {
    let dd;
    let mm;
    let yyyy;
    let h;

    try {
        dd = data.slice(8, 10)
        mm = data.slice(5, 7)
        yyyy = data.slice(0, 4)
        h = data.slice(11, 16)
    } catch(e) {
        dd = '--'
        mm = '--'
        yyyy = '--'
    }
    return  dd + '/' + mm + '/' + yyyy + '-' + h
    }

  constructor(private route:ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
      this.getDeputado(this.id)
      this.getproximoEvento(this.id)
      this.getultimoEvento(this.id)
  })
  }

}
