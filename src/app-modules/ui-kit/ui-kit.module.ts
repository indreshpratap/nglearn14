import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { uiComponents } from './components';
import { PRIME_NG } from './primeng-modules';
import { TrimPipe } from './trim.pipe';

@NgModule({
    declarations: [...uiComponents,TrimPipe],
    imports: [CommonModule, FormsModule, ReactiveFormsModule,...PRIME_NG],
    exports: [...uiComponents,TrimPipe,
        CommonModule, FormsModule, ReactiveFormsModule,...PRIME_NG],
})
export class UIKitModule { }