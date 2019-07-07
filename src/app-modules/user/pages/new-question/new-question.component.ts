import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface Address {
  line1: string;
  line2: string;
  line3?: string;
  pincode?: string;
}
@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {

  form: FormGroup;
  addrKeys: Array<string>;

  constructor() { }

  ngOnInit() {
    let addr: Address;
    addr = {
      line1: "fdlfskjdfl fldsk f",
      line2: "fsdfsdfldjflksf",
      pincode: null

    };
    let address = new FormGroup({});

    this.form = new FormGroup({

      question: new FormControl(null, [Validators.required, Validators.maxLength(500)]),
      tags: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required]),

      address: address
      // only for example


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
}
