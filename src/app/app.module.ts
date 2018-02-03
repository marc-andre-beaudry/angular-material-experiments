import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EditorComponent } from './editor/editor.component';
import { QueryExplorerComponent } from './query-explorer/query-explorer.component';
import { QueryResultComponent } from './query-result/query-result.component';
import { QueryEditorComponent } from './query-editor/query-editor.component';
import { QueryStoreService } from 'app/query-store.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  
  declarations: [AppComponent, EditorComponent, QueryExplorerComponent, QueryResultComponent, QueryEditorComponent],
  entryComponents: [],
  providers: [QueryStoreService],
  bootstrap: [AppComponent],
})
export class AppModule { }
