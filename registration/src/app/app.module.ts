import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Detail1Component } from './detail-1/detail-1.component';
import { Detail2Component } from './detail-2/detail-2.component';
import { Detail3Component } from './detail-3/detail-3.component';
import { Detail4Component } from './detail-4/detail-4.component';
import { DetailsDirective } from './details.directive';
import { Formspacecomponent } from './formspace/formspace.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Detail1Component,
    Detail2Component,
    Detail3Component,
    Detail4Component,
    DetailsDirective,
    Formspacecomponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
