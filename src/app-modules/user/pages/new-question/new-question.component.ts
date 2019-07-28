import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { smallAndSpace } from 'src/utils/custom.validators';
import { QuestionService } from '../../question.service';

interface Address {
  line1: string;
  line2: string;
  line3?: string;
  pincode?: string;
}
@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss'],
  // providers:[QuestionService]
})
export class NewQuestionComponent implements OnInit {

  form: FormGroup;
  addrKeys: Array<string>;
  submitted = false;
  questions;
  // Dependency injection
  constructor(private questionSvc: QuestionService) { }

  ngOnInit() {
    this.questions = this.questionSvc.getQuestions();
    let addr: Address;
    addr = {
      line1: "fdlfskjdfl fldsk f",
      line2: "fsdfsdfldjflksf",
      pincode: null

    };
    let address = new FormGroup({});

    this.form = new FormGroup({

      title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      question: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(500)]),
      tags: new FormControl([], [Validators.required]),
      confirmTerms: new FormControl(false, [Validators.requiredTrue]),

      // address: address
      // only for example
      // Validators.pattern('[a-z ]+')

    });


    // just for example generating dynamic controls
    this.addrKeys = Object.keys(addr);
    this.addrKeys.forEach(key => {
      address.addControl(key, new FormControl(addr[key]))
    })
  }


  setAddress() {
    this.form.get('address').patchValue({
      // address: {
      line1: "Noida",
      line2: "Sector 115"
      // }
    });
  }


  save() {
    this.submitted = true;
    if (this.form.valid) {
      console.log('Save', this.form.value);
      this.questionSvc.saveQuestions(this.form.value)
        .subscribe(res => {
          if (res.status) {
            this.form.reset();
            alert('Question Saved');
          }
        });
    }
  }
}
