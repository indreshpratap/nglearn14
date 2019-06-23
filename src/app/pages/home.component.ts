import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    // styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 
   
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        // this.activatedRoute.snapsho
        console.log(this.activatedRoute.snapshot.queryParams);
     }
}
