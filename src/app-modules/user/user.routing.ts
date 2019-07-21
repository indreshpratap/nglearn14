import { Routes } from '@angular/router';
import { NewQuestionComponent, QuestionListComponent } from './pages';

export const userRouting: Routes = [
    // {
    //     path: "user",
    //     children: [
            { path: "new-question", component: NewQuestionComponent,data:{secRef:'SEC01'} },
            { path: "questions", component: QuestionListComponent,data:{secRef:'SEC02'} }
    //     ]
    // },
]