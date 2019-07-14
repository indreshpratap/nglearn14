import { NgModule } from '@angular/core';
import { userComponents } from './pages';
import { RouterModule } from '@angular/router';
import { userRouting } from './user.routing';
import { UIKitModule } from '../ui-kit/ui-kit.module';
import { QuestionService } from './question.service';

@NgModule({
  declarations: [
    ...userComponents
  ],
  imports: [
    UIKitModule,
    RouterModule.forChild(userRouting)
  ],
  providers:[]
})
export class UserModule { }
