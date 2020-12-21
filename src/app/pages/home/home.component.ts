import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navigationId: string
  constructor(
    private dataService: DataService,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.navigationId = 'hero'
    this.dataService.navigationSubject.subscribe(res => {
      this.navigationId = res
      document.getElementById(this.navigationId).scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  scrollEvent(aboveElement, belowElement, event) {
    if (this.platform.ANDROID || this.platform.IOS) { return }
    if (event.wheelDeltaY > 0 && aboveElement) {
      event.preventDefault()
      this.dataService.navigationSubject.next(aboveElement.id)
      console.log(aboveElement.id);

      aboveElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    if (event.wheelDeltaY < 0 && belowElement) {
      event.preventDefault()
      this.dataService.navigationSubject.next(belowElement.id)
      belowElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  openContactUs() {
    this.dataService.openContactUs()
  }
}
