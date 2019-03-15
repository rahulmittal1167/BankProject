import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { ServicesComponent } from './home/services/services.component';
import { LoantypesComponent } from './home/services/loan-service/loan/loantypes.component';
import { HomeComponent } from './home/home.component';
import { LoanServiceComponent } from './home/services/loan-service/loan-service.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterUserComponent } from './home/login/register-user/register-user.component';


const routes: Routes=[{
  path:" ",
  component:HomeComponent},
  {
    path:"login/services",
    component: ServicesComponent},
  {
    path:"login/loan",
    component:LoanServiceComponent},
    {
      path:"login/loan/loantype",
      component:LoantypesComponent},
      {
        path:"login",
        component:LoginComponent},
        {
          path:"login/RegisterUser",
          component:RegisterUserComponent},

];
@NgModule({

  imports: [RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
