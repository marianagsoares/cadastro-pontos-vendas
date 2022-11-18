import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMunicipio, IUf } from '../model/dados';

@Injectable({
  providedIn: 'root'
})
export class IBGEService {

  constructor(private http: HttpClient) { }

  private readonly baseUrlUf: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"

  private readonly baseUrlMunicipio: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"

  buscarUf(){
    return this.http.get<IUf[]>(this.baseUrlUf)
  }

  buscarMunicipio(siglaMunicipio: number){
    return this.http.get<IMunicipio[]>(`${this.baseUrlMunicipio}${siglaMunicipio}/municipios`)
  }
}