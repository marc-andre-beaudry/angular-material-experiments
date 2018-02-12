import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SearchHistoryService {

  constructor() { }

  getSearchHistory(): Observable<SearchHistoryItem[]> {
    return of(SEARCH_HISTORY);
  }
}

const SEARCH_HISTORY: Array<SearchHistoryItem> = [
  { name: "7534", displayName: "TAI", className: "System"},
  { name: "60560", displayName: "TAI Fire", className: "System"},
  { name: "marcandb", displayName: "Marc-Andre Beaudry", className: "User"},
  { name: "iapp123.ms.com", displayName: "iapp123.ms.com", className: "PhysicalServer"},
  { name: "vip.123.bla", displayName: "vip.123.bla", className: "LoadBalancer"},
]

export interface SearchHistoryItem {
  name: string;
  displayName: string;
  className: string;
}