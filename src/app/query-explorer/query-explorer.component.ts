import { Component, OnInit } from '@angular/core';


import { QueryStoreService, Query } from 'app/query-store.service';

@Component({
  selector: 'app-query-explorer',
  templateUrl: './query-explorer.component.html',
  styleUrls: ['./query-explorer.component.scss']
})
export class QueryExplorerComponent implements OnInit {

  private globalQueries: Array<Query>;
  private personalQueries: Array<Query>;

  constructor(private queryStoreService: QueryStoreService) {
  }

  ngOnInit() {
    this.queryStoreService.getGlobalQueries()
      .subscribe(queries => this.globalQueries = queries);

    //this.queryStoreService.getPersonalQueries()
    //  .subscribe(queries => this.personalQueries = queries);
  }

}
