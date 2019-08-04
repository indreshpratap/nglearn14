import { HomeComponent, AboutComponent, NotFoundComponent, SignupComponent } from './pages';
import { Routes } from '@angular/router';
import { AccessGuard } from './access.guard';
import { ObservablesComponent } from './examples';

export const appRoutes: Routes = [
    // {path:"",redirectTo:"home",pathMatch:"full"},
    {
        path: "", children: [
            // lazy loading of modules
            { path: "user", loadChildren: "../app-modules/user/user.module#UserModule",canActivateChild:[AccessGuard] },
          //  {path:"",redirectTo:"home",pathMatch:"full"},
           
        ]
    },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "signup", component: SignupComponent },

    {path:"example/observable", component:ObservablesComponent},

    // not found handler, always at bottom
    { path: "**", component: NotFoundComponent }
];