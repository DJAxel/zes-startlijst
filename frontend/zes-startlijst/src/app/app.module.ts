import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { StartlistComponent } from './startlist/startlist.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AppRoutingModule } from './/app-routing.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './_services/token.interceptor';
import { LoginService } from './_services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderbarComponent,
    StartlistComponent,
    AddFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
      deps: [LoginService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
