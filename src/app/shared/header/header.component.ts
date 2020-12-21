import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigationId: string
  mobile = false
  close = false
  hideMenu = false
  constructor(
    private dataService: DataService,
    private router: Router
  ) {
    this.navigationId = 'hero'
  }

  ngOnInit(): void {

    this.mobile = window.innerWidth <= 767
    this.dataService.navigationSubject.subscribe(res => {
      this.navigationId = res
    })
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        if (val.url === '/admin') {
          this.hideMenu = true
        } else {
          this.hideMenu = false
        }
      }
    });
  }

  navigate(dest: string) {
    this.navigationId = dest
    this.dataService.navigationSubject.next(this.navigationId)
  }
  changeDisplay() {
    this.close = !this.close
    setTimeout(() => {
      this.mobile = !this.mobile
    }, 300)
    console.log(this.close);

  }
}
