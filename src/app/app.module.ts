import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { exampleComponents } from './examples';
import { pageComponents } from './pages';
import { appRoutes } from './app.routing';
import { components } from './components';
// import { UserModule } from 'src/app-modules/user/user.module';
import { UIKitModule } from 'src/app-modules/ui-kit/ui-kit.module';




@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...exampleComponents,
    ...pageComponents
  ],
  imports: [
    BrowserModule,
    UIKitModule,
    RouterModule.forRoot(appRoutes),
    //  UserModule // eager loading of modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
