import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

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

    @Output()  onClear:EventEmitter<any> = new EventEmitter();
    @Output()  onTimeout = new EventEmitter<boolean>();



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

    handleClose() {
        console.log('handling close event');
        this.onClear.emit(this.message);
    }
}
