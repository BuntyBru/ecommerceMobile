import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ListingComponent } from './listing/listing.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ItemsComponent } from './listing/items/items.component';
import {MatCardModule} from '@angular/material/card';
import { DisplayitemComponent } from './listing/displayitem/displayitem.component';


@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    ItemsComponent,
    DisplayitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
