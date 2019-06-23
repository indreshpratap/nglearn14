import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { exampleComponents } from './examples';
import { pageComponents } from './pages';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    ...exampleComponents,
    ...pageComponents
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
