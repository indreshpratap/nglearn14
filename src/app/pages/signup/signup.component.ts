import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ApiClient } from 'src/app-modules/common/api.client';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  qualifications: FormArray;
  constructor(private fb: FormBuilder, private api: ApiClient) { }

  ngOnInit() {
    this.prepareForm();
  }

  prepareForm() {

    this.qualifications = this.fb.array([]);
    this.form = this.fb.group({
      name: [],
      email: [],
      qualifications: this.qualifications
    });
  }

  addQualification() {
    this.qualifications.push(this.fb.group({
      title: [,[Validators.required]],
      markObtained: [,[Validators.required]]
    }));

    console.log(this.qualifications);
  }


  remove(indx) {
    this.qualifications.removeAt(indx);
  }

  save() {
    this.api.post('register', this.form.value).subscribe(res => {
      if (res.status) {
        alert('user registered');
        this.prepareForm();
      }
    }, (err) => {
      alert(err.error.error);
    })
  }


}
