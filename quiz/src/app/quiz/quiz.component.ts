import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Question } from "../Question";
import { QuizService } from "../quiz.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuizComponent implements OnInit {
  questions:Array<Question>=[];
  resultMessage:string="";
  correct:number=0;

  constructor(public questServer:QuizService) { }



  ngOnInit(): void {
    this.questServer.getQuestions().subscribe(data => this.questions = data);
  }

  checkAnswers(){
    this.correct  = 0;
    for(let i=0; i<10; i++){
      let correctAnswer = this.questions[i].answer;
      let question = document.getElementById(i.toString());
      let givenAnswer = <HTMLInputElement>question?.querySelector('input[name=option]:checked');
      if(givenAnswer.value === correctAnswer){this.correct++}
      else{
        let message = document.createElement("div");
        message.innerHTML = "The correct answer was: " + correctAnswer;
        question?.appendChild(message);
      }
    }

    if(this.correct <7){this.resultMessage = "You only scored: " + this.correct + "/10. Please try again"}
    else{this.resultMessage = "You scored: " + this.correct + "/10. You passed!"}

  }

}


