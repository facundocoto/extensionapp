import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, Injector } from '@angular/core';

import { INAppComponent } from './inapp.component';
import { InfoService } from './info.service';
import { SecondComponent } from './second/second.component';

@NgModule({
   declarations: [ INAppComponent, SecondComponent ],
  imports: [ BrowserModule ],
  providers: [InfoService],
  exports: [],
  bootstrap: [INAppComponent]
})
export class ExtAppModule {  }
