import { Injectable } from '@angular/core';
import { ApiClient } from '../common/api.client';

@Injectable({providedIn:'root'})
export class QuestionService {
    
    constructor(private api:ApiClient){}
   private questions = [];

    getQuestions(){
        return this.questions;
    }

    saveQuestions(question) {
      console.log(question);
       return this.api.post('question', question);
    }

}