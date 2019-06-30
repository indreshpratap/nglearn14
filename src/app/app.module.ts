import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { exampleComponents } from './examples';
import { pageComponents } from './pages';
import { appRoutes } from './app.routing';
import { components } from './components';



@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...exampleComponents,
    ...pageComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
