import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PlatformModule } from '@angular/cdk/platform';

const Materials = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  IvyCarouselModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  PlatformModule
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
