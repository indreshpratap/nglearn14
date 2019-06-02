import { Component } from '@angular/core';

@Component({
    selector: 'app-ng-class',
    templateUrl: './ng-class.component.html',
    styleUrls: ['./ng-class.component.scss']

})
export class NgClassComponent {
    msgType;
    classes = [];

    styles = {};
    conditions = { success: false, error: false, inline: false };
    constructor() {

    }

    setMessageType(type) {
        this.msgType = type;
        //array of classes
        this.classes = [type, 'inline'];
        if (type === 'success') {
            this.conditions.success = true;
            this.conditions.error = false;
        } else {
            this.conditions.success = false;
            this.conditions.error = true;
        }

    }

    setInline() {
        this.conditions.inline = !this.conditions.inline;
    }


    addStyle(keyRef: HTMLInputElement, valueRef: HTMLInputElement) {
        this.styles[keyRef.value] = valueRef.value;
    }


}
