import { Component, OnInit } from '@angular/core';
import { IFormulario } from 'src/app/model/dados';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  localVendas: IFormulario[] = []; //9.2

  constructor() { }

  ngOnInit(): void { //9.2
    //SIMULA O GET (LISTAR TODOS OS LOCAIS DE VENDAS FINDALL)
    this.localVendas = JSON.parse(localStorage.getItem("localVendas") || "[]");
  }

}
