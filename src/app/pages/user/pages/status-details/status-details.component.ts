import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppRoutes } from '@core/constants/routes';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-status-details',
  templateUrl: './status-details.component.html',
  styleUrls: ['./status-details.component.scss']
})
export class StatusDetailsComponent implements OnInit {
  items: MenuItem[] = [];
  home: MenuItem = {};
  statusName = '';

  constructor(private activatedRoute: ActivatedRoute) {
    this.statusName = this.activatedRoute.snapshot.params['name'];


  }
  ngOnInit(): void {
    this.items = [{ label:  this.statusName }, ];
    this.home = { icon: 'pi pi-home pr-1', routerLink: AppRoutes.User , label: 'Home', styleClass: 'flex align-items-center' };
  }


}
