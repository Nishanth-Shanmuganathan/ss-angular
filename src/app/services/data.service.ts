import { MainNotificationComponent } from './../shared/main-notification/main-notification.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  navigationSubject = new BehaviorSubject<string>('services')

  constructor(
    private dialog: MatDialog
  ) { }

  openContactUs() {
    this.dialog.open(MainNotificationComponent, {
      disableClose: true
    })
  }
}
