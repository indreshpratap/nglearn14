import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { uiComponents } from './components';
import { PRIME_NG } from './primeng-modules';

@NgModule({
    declarations: [...uiComponents],
    imports: [CommonModule, FormsModule, ReactiveFormsModule,...PRIME_NG],
    exports: [...uiComponents,
        CommonModule, FormsModule, ReactiveFormsModule,...PRIME_NG],
})
export class UIKitModule { }