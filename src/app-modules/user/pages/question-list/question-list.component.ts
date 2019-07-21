import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../question.service';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  questions;
  constructor(private questionSvc: QuestionService,
    private httpClient:HttpClient
    ) { }

  ngOnInit() {
 //   this.questions = this.questionSvc.getQuestions();
 this.fetchQuestions();
  }

  view(item){
    
  }

  fetchQuestions(){
    this.httpClient.get(environment.apiPath+'questions')
    .subscribe((res)=>{
      this.questions = res;
    })
  }

}
