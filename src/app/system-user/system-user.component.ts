import { Component, OnInit } from '@angular/core';

import { SystemUserService, SystemUser } from 'app/system-user.service';

@Component({
  selector: 'app-system-user',
  templateUrl: './system-user.component.html',
  styleUrls: ['./system-user.component.scss']
})
export class SystemUserComponent implements OnInit {

  private systems: Array<SystemUser>;
  private filteredSystems: Array<SystemUser>;
  private filter: string = "ALL";

  constructor(private systemUserService: SystemUserService) { }

  ngOnInit() {
    this.systemUserService.getSystems()
      .subscribe(items => {
        this.systems = items; 
        this.filteredSystems = items;
      });
  }

  onFilterSystemRoles(filter:string) {
    if (filter === "ITSO") {
      this.filteredSystems = this.systems.filter(x => x.itso);
    } else if (filter === "BUSO") {
      this.filteredSystems = this.systems.filter(x => x.buso);
    } else if (filter === "DEV") {
      this.filteredSystems = this.systems.filter(x => x.dev);
    } else if (filter === "QA") {
      this.filteredSystems = this.systems.filter(x => x.qa);
    } else if (filter === "SUPPORT") {
      this.filteredSystems = this.systems.filter(x => x.support);
    } else {
      this.filteredSystems = this.systems;
    }
  }
}
