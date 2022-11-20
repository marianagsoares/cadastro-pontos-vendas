import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMunicipio, IUf } from '../model/dados';

@Injectable({
  providedIn: 'root'
})
export class IBGEService {

  constructor(private http: HttpClient) { } //3.1

  private readonly baseUrlUf: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome" //3.2

  private readonly baseUrlMunicipio: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" //5.1

  buscarUf(){ //3.3 e 3.4
    return this.http.get<IUf[]>(this.baseUrlUf)
  }

  buscarMunicipio(siglaEstado: string){ //5.2
    return this.http.get<IMunicipio[]>(`${this.baseUrlMunicipio}${siglaEstado}/municipios`)
  }
}