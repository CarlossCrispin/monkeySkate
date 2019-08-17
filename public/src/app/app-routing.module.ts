import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './default/header/header.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [ 
  {path : '', component: HeaderComponent, pathMatch:"full"},
  {path : 'productos', component: UserComponent},
  // {path : 'nuevo', component : UserComponent},
  // {path : '**', component : HeaderComponent}
];
// const routes: Route[] =[
//   {path :'',component:HolaComponent},
//   {path : 'about', component:AboutComponent},
//   {path : 'datos', component:FormularioComponent}
// ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
