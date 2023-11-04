import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './Component/adminpage/adminpage.component';
import { LoginpageComponent } from './Component/loginpage/loginpage.component';
import { RegisterpageComponent } from './Component/registerpage/registerpage.component';

const routes: Routes = [
  {path:'',redirectTo: 'userpage', pathMatch:'full'},
  {path:'adminpage', component: AdminpageComponent},
  {path: 'loginpage', component: LoginpageComponent},
  {path: 'registerpage', component: RegisterpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
