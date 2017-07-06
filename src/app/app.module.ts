import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KegFormComponent } from './keg-form/keg-form.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';


@NgModule({
  declarations: [
    AppComponent,
    KegFormComponent,
    UserInterfaceComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
