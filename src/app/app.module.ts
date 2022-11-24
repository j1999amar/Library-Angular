import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserReistrationComponent } from './user-reistration/user-reistration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookIssueComponent } from './book-issue/book-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserReistrationComponent,
    UserLoginComponent,
    BookListComponent,
    BookEntryComponent,
    BookSearchComponent,
    BookDeleteComponent,
    BookIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
