import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { StartlistComponent } from './startlist/startlist.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderbarComponent,
    StartlistComponent,
    AddFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
