import { Component } from '@angular/core';

@Component({
    selector: 'app-ng-for',
    templateUrl: './ng-for.component.html'
})
export class NgForComponent {
    listItems: Array<any>;
    todos:Array<any> =[];

    constructor() {
        this.listItems = ['RED', 'GREEN', 'BLUE'];
    }

    remove(item, index) {
        this.todos.splice(index, 1);
    }

    add(inputRef) {
        if (inputRef.value) {
            this.todos.push(inputRef.value);
            inputRef.value = '';
        }
    }
}
