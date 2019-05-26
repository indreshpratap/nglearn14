import { Component } from '@angular/core';

@Component({
    selector:'app-interpolation',
    templateUrl:'./interpolation.component.html'
})
export class InterpolationComponent {

    message = 'Welcome User';
    items = ['ABC','XYZ'];
    user = {
        name:'Indresh',
        role:'user'
    }

    constructor(){
        console.log(this.user.toString());
    }

}