import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Animal } from './app.component';
import { DogComponent } from './dog/dog.component';

@NgModule({
  declarations: [
    Animal,
    DogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Animal]
})
export class AppModule { }
