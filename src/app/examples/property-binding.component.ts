import { Component } from '@angular/core';

@Component({
    selector: 'app-property-binding',
    templateUrl: './property-binding.component.html',
  
})
export class PropertyBindingComponent {
    divRef = 'content';
    tabIndx = 10;

    constructor(){
        
    }

    modify(event,flag:boolean,message:string,indx:number){
        console.log('working',event);
            this.divRef = message;
            this.tabIndx = indx;
    }

    handleEvent(ev:MouseEvent){
        if(ev.altKey){
        console.log(ev.type,ev.clientX,ev.clientY);
        }
    }


}
