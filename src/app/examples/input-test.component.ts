import { Component } from '@angular/core';
import { MyMessage } from './message.component';

@Component({
    selector: 'app-input-test',
    templateUrl: './input-test.component.html',
    // styleUrls: ['./input-test.component.scss']
})
export class InputTestComponent {

    customMessage: string;
    color:string;
    msgConfig:MyMessage;

    setMessage(msg,color) {
        this.customMessage = msg;
        this.color = color;

        this.msgConfig = {
            message: msg,
            color:color
        }
    }
}
