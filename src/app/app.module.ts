import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchHandlingComponent } from './search-handling/search-handling.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SearchHandlingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }