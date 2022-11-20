import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IFormulario, IMunicipio, IUf } from 'src/app/model/dados';
import { IBGEService } from 'src/app/services/ibge.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  constructor(
    private formBuilder: FormBuilder, //2.1
    private IBGEService: IBGEService, //4.1
    private snackBar: MatSnackBar //7.2.1
  ) { }

  ufs: IUf[] = []; //4.3
  municipios: IMunicipio[] = []; //6.3
  localVendas: IFormulario[] = []; //7.2.2

  //2.2
  formulario: FormGroup = this.formBuilder.group({
    nome: ["", [Validators.required]],
    local: ["", [Validators.required]],
    cidade: ["", [Validators.required]],
    estado: ["", [Validators.required]],
    inicio: ["", [Validators.required]],
    termino: ["", [Validators.required]],
  })

  ngOnInit(): void {
    //SIMULA O GET (LISTAR TODOS OS LOCAIS DE VENDAS FINDALL)
    this.localVendas = JSON.parse(localStorage.getItem("localVendas") || "[]"); //10.1

    this.IBGEService.buscarUf().subscribe((ufRetornado) => { //4.2  
      this.ufs = ufRetornado;
    });
  }

  procurarMunicipio(evento: any) { //6.2
    const idDoEstado = evento.target.value;
    this.IBGEService.buscarMunicipio(idDoEstado).subscribe((municipioRetornado) => {
      this.municipios = municipioRetornado;
    })
  }

  adicionarLocalVenda(evento: any) { //2.5
    evento.preventDefault();
    evento.stopPropagation();

    const nome = this.formulario.get("nome")?.value;
    const local = this.formulario.get("local")?.value;
    const cidade = this.formulario.get("cidade")?.value;
    const estado = this.formulario.get("estado")?.value;
    const inicio = this.formulario.get("inicio")?.value;
    const termino = this.formulario.get("termino")?.value;

    //7.2
    if (nome == "" || local == "" || cidade == "" || estado == "" || inicio == "" || termino == "") {

      this.snackBar.open(`Preencha os campos abaixo`, 'fechar', {
        duration: 5000,
        horizontalPosition: "right",
        verticalPosition: "bottom"
      }) //7.2.3
    }
    else {
      this.localVendas.push({
        nome: nome,
        estado: estado,
        cidade: cidade,
        local: local,
        horarioInicio: inicio,
        horarioTermino: termino
      })

      //SIMULA O POST
      localStorage.setItem("localVendas", JSON.stringify(this.localVendas)); //9.1
      
      this.snackBar.open(`Ponto de venda cadastrado com sucesso`, `fechar`, {
        duration: 5000,
        horizontalPosition: "right",
        verticalPosition: "bottom"
      }) //7.2.3
    }
  }
}