import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputOutputExComponent } from './input-output-ex/input-output-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputExComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
