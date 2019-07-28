import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../question.service';
import {ApiClient} from '../../../common/api.client';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  questions;
  constructor(private questionSvc: QuestionService,
    private api:ApiClient
    ) { }

  ngOnInit() {
 //   this.questions = this.questionSvc.getQuestions();
 this.fetchQuestions();
  }

  view(item){
    
  }

  fetchQuestions(){
    this.api.get('questions')
    .subscribe(res=>{
      this.questions = res.data;
    },(err)=>{
      
    });
  }

}
