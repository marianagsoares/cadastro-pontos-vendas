import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsComponent } from './views/forms/forms.component';
import { MaterialAngularModule } from './modules/material-angular/material-angular.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './components/cards/cards.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LocaisCadastradosComponent } from './views/registered/locais-cadastrados.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    CardsComponent,
    ToolbarComponent,
    FooterComponent,
    LocaisCadastradosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAngularModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
