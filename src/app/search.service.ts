import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SearchService {

  constructor() { }

  getSearchResults(): Observable<SearchResult[]> {
    return of(SEARCH_RESULTS);
  }
}

const SEARCH_RESULTS: Array<SearchResult> = [
  { name: "7534", displayName: "TAI", className: "System"},
  { name: "60560", displayName: "TAI Fire", className: "System"},
  { name: "marcandb", displayName: "Marc-Andre Beaudry", className: "User"},
  { name: "iapp123.ms.com", displayName: "iapp123.ms.com", className: "PhysicalServer"},
  { name: "vip.123.bla", displayName: "vip.123.bla", className: "LoadBalancer"},
]

export interface SearchResult {
  name: string;
  displayName: string;
  className: string;
}