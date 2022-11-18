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
    private formBuilder: FormBuilder,
    private IBGEService: IBGEService,
    private snackBar: MatSnackBar
  ) { }

  estados!: IUf[];
  cidades!: IMunicipio[];
  localVendas: IFormulario[] = [];

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
    this.localVendas = JSON.parse(localStorage.getItem("localVendas") || "[]");

    this.IBGEService.buscarUf().subscribe((ufRetornado) => {
      this.estados = ufRetornado;
    });
  }

  procurarMunicipio(event: any) {
    const idDoMunicipio = event.target.value;
    this.IBGEService.buscarMunicipio(idDoMunicipio).subscribe((municipioRetornado) => {
      this.cidades = municipioRetornado;
    })
  }

  adicionarLocalVenda(evento: any) {
    evento.preventDefault();
    evento.stopPropagation();

    const nome = this.formulario.get("nome")?.value;
    const local = this.formulario.get("local")?.value;
    const cidade = this.formulario.get("cidade")?.value;
    const estado = this.formulario.get("estado")?.value;
    const inicio = this.formulario.get("inicio")?.value;
    const termino = this.formulario.get("termino")?.value;


    if (nome == "" || local == "" || cidade == "" || estado == "" || inicio == "" || termino == "") {

      this.snackBar.open(`Preencha os campos abaixo`, 'fechar', {
        duration: 5000,
        horizontalPosition: "right",
        verticalPosition: "bottom"
      })
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

      console.log(this.localVendas)

      //SIMULA O POST
      localStorage.setItem("localVendas", JSON.stringify(this.localVendas));
      
      this.snackBar.open(`Ponto de venda cadastrado com sucesso`, `fechar`, {
        duration: 5000,
        horizontalPosition: "right",
        verticalPosition: "bottom"
      })
    }
  }
}