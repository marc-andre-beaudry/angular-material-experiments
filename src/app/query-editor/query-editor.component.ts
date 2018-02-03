import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-editor',
  templateUrl: './query-editor.component.html',
  styleUrls: ['./query-editor.component.scss']
})
export class QueryEditorComponent implements OnInit {

  private connections: Array<Connection> = [
    { uuid:"1", name:"DEV Sparql Environment", url:"http://localhost:5820/TEST/query" },
    { uuid:"2", name:"QA Sparql Environment", url:"http://localhost:5820/TEST/query" },
    { uuid:"3", name:"PROD Sparql Environment", url:"http://localhost:5820/TEST/query" }
  ]

  private code: string = 
  `PREFIX  dc:  <http://purl.org/dc/elements/1.1/>
  PREFIX  ns:  <http://example.org/ns#>
  SELECT  ?title ?price
  WHERE   { ?x ns:price ?price .
            FILTER (?price < 30.5)
            ?x dc:title ?title . }`;
  constructor() { 
  }

  ngOnInit() {
  }
}

export interface Connection {
  uuid: string;
  name: string;
  url: string;
}
