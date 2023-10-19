import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isSideNavCollapsed = false;
  screenWidth = 0;
  isAdmin = true;

  constructor(private router: Router) {
    
  }

 

  ngOnInit(): void {
    if (!this.isAdmin) {
      this.router.navigate(['homepage'])
    }

  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
