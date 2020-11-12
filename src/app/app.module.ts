import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

/*
The purpose of the Angular module is to provide configuration information through the properties
defined by the @NgModule decorator. 

The decorator’s "imports" property tells Angular that the application
depends on features required to run an application in the browser and that the declarations and bootstrap
properties tell Angular about the components in the application and which one should be used to start the
application (there is only one component in this simple example application, which is why it is the only
value for both properties).
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
