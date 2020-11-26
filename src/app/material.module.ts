import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';

const Materials = [
  MatToolbarModule
]
@NgModule({
  imports: [
    BrowserAnimationsModule,
    ...Materials
  ],
  exports: [
    BrowserAnimationsModule,
    ...Materials
  ]
})
export class MaterialModule { }
