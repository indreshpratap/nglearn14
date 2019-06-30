import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @Input() show = false;
  @Output() onClose = new EventEmitter();
  @Output() onShow = new EventEmitter();

  username:string="user1";
  password:string;

  constructor() { }

  ngOnInit(): void { }

doLogin(form:NgForm){
    console.log(this.username, this.password, form.value);
}

  loginAction(state) {
      this.show = state;
      if(!this.show){
        this.onClose.emit(true);
      }
  }

}
