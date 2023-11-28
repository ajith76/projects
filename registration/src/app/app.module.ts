import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormlistComponent } from './formlist/formlist.component';
import { DataService } from './data.service';

import { Detail1Component } from './detail-1/detail-1.component';
import { Detail2Component } from './detail-2/detail-2.component';
import { Detail3Component } from './detail-3/detail-3.component';
import { Detail4Component } from './detail-4/detail-4.component';
import { Detail5Component } from './detail-5/detail-5.component';
import { DetailsDirective } from './details.directive';
import { Formspacecomponent } from './formspace/formspace.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormlistComponent,
    Detail1Component,
    Detail2Component,
    Detail3Component,
    Detail4Component,
    Detail5Component,
    DetailsDirective,
    Formspacecomponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
