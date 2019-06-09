import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

export interface MyMessage {
    color: string;
    message: string;
    delay?: number;
}
@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    // styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit,OnChanges {

    @Input() message: string;

    @Input() color: string;

    @Input("config") conf:MyMessage;

    constructor(){
        console.log('In constructor', this.message);
    }
    
    ngOnChanges(changes:SimpleChanges){
        console.log("ngOnChanges", changes);
        console.log("ngOnChanges config",changes.conf);
     }

    ngOnInit(){  
        console.log('In ngOnInit', this.message);
    }
}
