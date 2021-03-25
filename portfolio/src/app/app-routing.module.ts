import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'log-in', component: LogInComponent},
  { path:'', redirectTo: '/log-in', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
