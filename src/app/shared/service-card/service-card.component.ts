import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {
  @Input() content: string
  @Input() image: string

  constructor() {
    console.log(this.content);
    console.log(this.image);

  }

  ngOnInit(): void {
  }

}
