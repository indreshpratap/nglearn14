import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  questions;
  constructor(private questionSvc: QuestionService) { }

  ngOnInit() {
    this.questions = this.questionSvc.getQuestions();
  }

  view(item){
    
  }

}
