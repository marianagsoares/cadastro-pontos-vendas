import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsComponent } from './views/forms/forms.component';
import { CardsComponent } from './components/cards/cards.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LocaisCadastradosComponent } from './views/locais-cadastrados/locais-cadastrados.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialAngularModule } from './modules/material-angular/material-angular.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    /*Components*/
    ToolbarComponent,
    FooterComponent,
    CardsComponent,
    /*views*/
    FormsComponent,
    LocaisCadastradosComponent,
    /*component raiz do angular*/
    AppComponent,
  ],
  imports: [
    /*importe do arquivo material-angular.module.ts*/
    MaterialAngularModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
