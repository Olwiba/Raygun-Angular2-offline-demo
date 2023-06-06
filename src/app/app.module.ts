import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RaygunErrorHandler } from './app.raygun.setup';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: RaygunErrorHandler
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
