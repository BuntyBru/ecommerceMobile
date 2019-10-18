import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListingComponent} from './listing/listing.component';
import {DisplayitemComponent} from './listing/displayitem/displayitem.component';

const routes: Routes = [{
  path:'',
  component:ListingComponent
},
{
  path:':id',
  component:DisplayitemComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
