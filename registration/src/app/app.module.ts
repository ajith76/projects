import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormlistComponent } from './formlist/formlist.component';
import { FormspaceComponent } from './formspace/formspace.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormlistComponent,
    FormspaceComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
