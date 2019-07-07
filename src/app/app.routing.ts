import { HomeComponent, AboutComponent, NotFoundComponent } from './pages';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    // {path:"",redirectTo:"home",pathMatch:"full"},
    {
        path: "", children: [
            // lazy loading of modules
            { path: "user", loadChildren: "../app-modules/user/user.module#UserModule" },
          //  {path:"",redirectTo:"home",pathMatch:"full"},
           
        ]
    },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },

    // not found handler, always at bottom
    { path: "**", component: NotFoundComponent }
];