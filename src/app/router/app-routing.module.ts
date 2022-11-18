import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from '../views/forms/forms.component';
import { LocaisCadastradosComponent } from '../views/registered/locais-cadastrados.component';

const routes: Routes = [{
  path: "",
  component: FormsComponent
},
{
  path: "cadastros",
  component : LocaisCadastradosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
