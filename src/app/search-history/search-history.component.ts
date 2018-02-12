import { Component, OnInit } from '@angular/core';

import { SearchHistoryService, SearchHistoryItem } from 'app/search-history.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent implements OnInit {

  private searchHistoryItems: Array<SearchHistoryItem>;

  constructor(private searchHistoryService: SearchHistoryService) { }

  ngOnInit() {
    this.searchHistoryService.getSearchHistory()
      .subscribe(items => this.searchHistoryItems = items);
  }

}
