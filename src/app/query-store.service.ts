import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class QueryStoreService {

  constructor() { }

  getGlobalQueries(): Observable<Query[]> {
    return of(GLOBAL_QUERIES);
  }

  getPersonalQueries(): Observable<Query[]> {
    return of(GLOBAL_QUERIES);
  }
}

const GLOBAL_QUERIES: Array<Query> = [
  { 
    uuid: "123e4567-e89b-12d3-a456-426655440000", name:"Get classes", content:
    `SELECT DISTINCT ?className
    WHERE { 
      ?iri a ?className.
    }`
  },
  { 
    uuid: "123e4567-e89b-12d3-a456-426655440000", name:"Get count per class", content:
    `SELECT ?className (count(?iri) as ?count)
    WHERE { 
      ?iri a ?className.
    }
    GROUP BY ?className`
  }
]

export interface Query {
  uuid: string;
  name: string;
  content: string;
}