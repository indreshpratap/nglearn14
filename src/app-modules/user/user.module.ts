import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userComponents } from './pages';
import { RouterModule } from '@angular/router';
import { userRouting } from './user.routing';
import { FormsModule } from '@angular/forms';
import { UIKitModule } from '../ui-kit/ui-kit.module';

@NgModule({
  declarations: [
    ...userComponents
  ],
  imports: [
    UIKitModule,
    RouterModule.forChild(userRouting)
  ]
})
export class UserModule { }
