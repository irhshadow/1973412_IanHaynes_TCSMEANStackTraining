import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './Question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(public http:HttpClient) { }

  getQuestions():Observable<Question[]>{
    return this.http.get<Question[]>("http://localhost:3000/questions");
     
 }

}6