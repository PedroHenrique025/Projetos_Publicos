import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogarComponent } from './logar/logar.component';
import { FrontEndComponent } from './front-end/front-end.component';

@NgModule({
  declarations: [
    AppComponent,
    LogarComponent,
    FrontEndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
