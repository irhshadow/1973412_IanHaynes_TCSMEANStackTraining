import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent},
  { path: 'quiz', component: QuizComponent},
  { path:'', redirectTo: 'landing', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
