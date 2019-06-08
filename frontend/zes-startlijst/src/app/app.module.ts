import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { StartlistComponent } from './startlist/startlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderbarComponent,
    StartlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
