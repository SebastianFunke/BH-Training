import { Component } from '@angular/core';
import { QuestionServiceService } from './question-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BH-Training';
  question: QuestionServiceService[] = [];


constructor (private questions: QuestionServiceService){
  console.log(questions.getQuestions());
  
}

  





}
