import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-about',
    template: `this is about us page
    <button (click)="handleClick()">Go Home</button>
    `,
    styles: [``]
})
export class AboutComponent implements OnInit {

    constructor(private router:Router) { }

    ngOnInit(): void { }

    handleClick(){
        this.router.navigate(['home']);
    }
}
