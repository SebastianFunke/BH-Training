import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { QuestionServiceService } from './question-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BH-Training';
  question: QuestionServiceService[] = [];
  actualQuestion!: any[];
  actualCorrectAnswers!: any[];
  restQuestions: any[] | undefined;
  actualAnswers!: any[];
  checkedAnswers!:boolean[];
  IsChecked:boolean;
  btnText='Prüfen';
  btnDisabled=false;
  counterCorrect = 0;
  counterFalse = 0;

constructor (public questions: QuestionServiceService, private _snackBar: MatSnackBar){
  this.IsChecked =false;
  this.setActualQuestion();
  this.setAnswers();  
}

 openSnackBar(message: string) {
   this._snackBar.open(message, '',{
     duration:  1100,
   });
 }


setBtnResult(){
  this.btnText = 'bitte warten';
  if(this.allAnswersRight()){
    this.openSnackBar('Korrekt! Gut gemacht.');
    this.counterCorrect++;
  } else {
    this.openSnackBar('Leider Falsch.');
    this.counterFalse++;
  }
}

setActualQuestion(){
  this.actualQuestion = this.questions.getQuestion();
  this.setAnswers();
}

btnCheckClick(){
 
 if (this.btnText =="Prüfen"){
  this.checkAnswers();
  this.setBtnResult();
  this.btnDisabled = true;
  setTimeout(()=>{
    this.btnText = "nächste Frage";
    this.btnDisabled=false;
   }, 1300)
   
 } else if (this.btnText == "nächste Frage") {
  this.setNextQuestion();
 }
  
}

setNextQuestion(){
  this.setActualQuestion();
  this.btnText = "Prüfen";
}

allAnswersRight(){
  let returnValue= true;
  for (let i=0; i < this.actualCorrectAnswers.length ; i++){
    if(this.checkedAnswers[i] != this.actualCorrectAnswers[i]){
      returnValue =false;
    }
  }
  return returnValue;
}


checkAnswers(){
  for (let i=0; i < this.actualCorrectAnswers.length ; i++){
    if (this.checkedAnswers[i]==true || this.actualCorrectAnswers[i]==true){
    if(this.checkedAnswers[i] == this.actualCorrectAnswers[i]){
      document.getElementById('checkbox'+i)?.classList.add('correctAnswer')
    } else {
      document.getElementById('checkbox'+i)?.classList.add('falseAnswer')
      if(this.checkedAnswers[i] == true ){
        document.getElementById('card'+i)?.classList.add('falseAnswer')
      }
    }
  }
  if (this.actualCorrectAnswers[i]==true){
    document.getElementById('card'+i)?.classList.add('correctAnswer')
  }
  }
}
  
setAnswers(){
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ];
  this.actualAnswers = [];
  this.actualCorrectAnswers = [];
  this.checkedAnswers =[];

alphabet.forEach(element => {
  if (this.actualQuestion.hasOwnProperty(element)){
    this.actualAnswers.push(this.actualQuestion[element]['answer']);
    this.actualCorrectAnswers.push(this.actualQuestion[element]['correct']);
    this.checkedAnswers.push(false);
  }
});
}

restartGame(){
  this.counterCorrect = 0;
  this.counterFalse = 0;
  this.questions.restartQuestions();
  this.setNextQuestion();
}

}
