import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SearchHistoryService } from 'app/search-history.service';
import { SystemUserService } from 'app/system-user.service';
import { SearchService } from 'app/search.service';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SystemUserComponent } from './system-user/system-user.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  
  declarations: [AppComponent, HomeComponent, SearchComponent, SearchHistoryComponent, SystemUserComponent],
  entryComponents: [],
  providers: [SearchHistoryService, SystemUserService, SearchService],
  bootstrap: [AppComponent],
})
export class AppModule { }
