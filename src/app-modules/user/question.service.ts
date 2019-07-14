import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class QuestionService {
    
   private questions = [];

    getQuestions(){
        return this.questions;
    }

    saveQuestions(question) {
        console.log(question);
        this.questions.push(question);
    }

}