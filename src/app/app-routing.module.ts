import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'add-user', component: AddUserComponent},
  { path: 'edit-user', component: EditUserComponent},
  { path: 'list-user', component: ListUserComponent},
  { path: '', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);