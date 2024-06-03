import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import { EmptyPipe } from './pipes/empty.pipe';
import { TempConvertPipe } from './pipes/temp-convert.pipe';

@NgModule({
  declarations: [ // component, pipe, directive
    AppComponent,
    EmptyPipe,
    TempConvertPipe
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [ // services
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
