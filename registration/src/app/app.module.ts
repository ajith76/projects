import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormlistComponent } from './formlist/formlist.component';
import { FormspaceComponent } from './formspace/formspace.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormlistComponent,
    FormspaceComponent,
    Step1Component,
    Step2Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
