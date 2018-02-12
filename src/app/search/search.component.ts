import { Component, OnInit } from '@angular/core';

import { SearchService, SearchResult } from 'app/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private searchResults: Array<SearchResult>;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getSearchResults().subscribe(items => this.searchResults = items);
  }
}
