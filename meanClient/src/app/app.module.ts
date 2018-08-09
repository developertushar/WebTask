import { CountryService } from './shared/country.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { CreateUpdateComponent } from './functionality/create-update/create-update.component';
import { ListComponent } from './functionality/list/list.component';
import { NavbarComponent } from './functionality/navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import { DataService } from './data.service';


const appRoutes :Routes = [
  {path: 'list', component: ListComponent},
  {path: 'add', component: CreateUpdateComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateComponent,
    ListComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [CountryService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
