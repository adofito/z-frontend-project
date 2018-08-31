import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';

import {FilterPipe} from './pipes/filter.pipe';
import {OrderByPipe} from './pipes/sort.pipe';

import {SortComponent} from './users/components/sort/sort.component';
import {FilterComponent} from './users/components/filter/filter.component';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SortComponent,
    FilterComponent,
    FilterPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
