import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SystemUserService {

  constructor() { }

  getSystems(): Observable<SystemUser[]> {
    return of(SYSTEMS);
  }
}

const SYSTEMS: Array<SystemUser> = [
  { name: "123", displayName: "grn:/a/b/c/Test", taiDisplayName: "Test", itso: true, buso: true, dev:true, qa:true, support:true },
  { name: "7534", displayName: "grn:/a/b/c/TAI", taiDisplayName: "TAI", itso: false, buso: false, dev:true, qa:true, support:false },
  { name: "60560", displayName: "grn:/a/b/c/TAIFIRE", taiDisplayName: "TAIFIRE", itso: false, buso: false, dev:true, qa:true, support:true },
]

export interface SystemUser {
  name: string;
  displayName: string;
  taiDisplayName: string;
  itso: boolean;
  buso: boolean;
  dev: boolean;
  qa: boolean;
  support: boolean;
}