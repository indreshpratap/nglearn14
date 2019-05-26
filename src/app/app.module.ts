import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './examples/interpolation.component';
import { PropertyBindingComponent } from './examples/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
