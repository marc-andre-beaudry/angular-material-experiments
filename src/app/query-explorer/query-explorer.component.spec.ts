import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryExplorerComponent } from './query-explorer.component';

describe('QueryExplorerComponent', () => {
  let component: QueryExplorerComponent;
  let fixture: ComponentFixture<QueryExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
