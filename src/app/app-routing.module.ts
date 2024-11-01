import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';
import { TokenComponent } from './components/token/token.component';
const routes: Routes = [
  {
    path:'', component: AppLayoutComponent,
    children: [
      {path:'', component:DashboardComponent},
      {path:'token', component:TokenComponent},
      {path:'liste', component:ListComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
