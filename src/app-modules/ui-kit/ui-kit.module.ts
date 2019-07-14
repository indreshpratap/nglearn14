import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { uiComponents } from './components';

@NgModule({
    declarations: [...uiComponents],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [...uiComponents,
        CommonModule, FormsModule, ReactiveFormsModule],
})
export class UIKitModule { }