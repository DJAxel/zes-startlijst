import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartlistComponent } from './startlist/startlist.component';
import { AddFlightComponent } from './add-flight/add-flight.component';

const routes: Routes = [
  { path: '', component: StartlistComponent },
  { path: 'new-flight', component: AddFlightComponent },
]

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
