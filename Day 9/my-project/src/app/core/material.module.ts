import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

const materialComponentModules = [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ]

@NgModule({
  declarations: [],
  imports: materialComponentModules,
  exports: materialComponentModules
})
export class MaterialModule { }
