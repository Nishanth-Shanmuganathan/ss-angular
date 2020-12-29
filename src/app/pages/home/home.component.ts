import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  serviceContent: { content: string, image: string }[]
  navigationId: string
  constructor(
    private dataService: DataService,
    private platform: Platform
  ) {
    this.serviceContent = [
      {
        content: 'Expertise in water well drilling',
        image: './../../../assets/helper-images/bore.jpeg'
      },
      {
        content: 'Fully automated sensor rigs can drill upto 2000 feet',
        image: './../../../assets/helper-images/well.jpg'
      },
      {
        content: 'We also deal PVP s during drilling',
        image: './../../../assets/helper-images/pvc.png'
      }
    ]
  }

  ngOnInit() {
    this.navigationId = 'services'
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
