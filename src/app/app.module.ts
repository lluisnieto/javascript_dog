import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import { Animal } from './app.component';
import { DogComponent } from './dog/dog.component';

@NgModule({
    declarations: [
        Animal,
        DogComponent
    ],
    imports: [
        BrowserModule,
        MdButtonModule,
        MdCheckboxModule
    ],
    providers: [],
    bootstrap: [Animal]
})
export class AppModule { }
