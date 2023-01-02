import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchieveComponent } from './archieve/archieve.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetallnotesComponent } from './getallnotes/getallnotes.component';
import { HeaderComponent } from './header/header.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  {path:'signup',component:RegistrationComponent},
  {path:'signin',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'getallnotes',component:GetallnotesComponent},
    {path:'trash',component:TrashComponent},
    {path:'archieve',component:ArchieveComponent}
    
  ]
    
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
