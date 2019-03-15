import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './home/services/services.component';
import { LoanServiceComponent } from './home/services/loan-service/loan-service.component';
import { LoantypesComponent } from './home/services/loan-service/loan/loantypes.component';
import { DepositComponent } from './home/services/deposit/deposit.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeloComponent } from './home/services/loan-service/loan/homelo/homelo.component';
import { CarComponent } from './home/services/loan-service/loan/car/car.component';
import { EduloComponent } from './home/services/loan-service/loan/edulo/edulo.component';
import { PersonalloComponent } from './home/services/loan-service/loan/personallo/personallo.component';
import { CalcService } from './calc.service';
import { LoginComponent } from './home/login/login.component';
import { RegisterUserComponent } from './home/login/register-user/register-user.component';
import { RestService } from './rest.service';
import{HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    LoanServiceComponent,
    LoantypesComponent,
    DepositComponent,
    HomeloComponent,
    CarComponent,
    EduloComponent,
    PersonalloComponent,
    LoginComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CalcService,RestService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
