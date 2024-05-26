import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ // componets, directives, pipes
    AppComponent, 
    EmployeeComponent,
    ProductComponent
  ],
  imports: [ // other modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // services
  bootstrap: [AppComponent] // bootstrap components
})
export class AppModule { }
