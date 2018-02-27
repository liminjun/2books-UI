import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import { InitCapsPipe } from './shared/init-caps.pipe';

import { BooksComponent } from './books/books.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { NewsComponent } from './news/news.component';
import { DetailComponent } from './news/detail/detail.component';
import { MatchDirective } from './shared/match.directive';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    AppComponent,


    InitCapsPipe,

    BooksComponent,
    FeedbackComponent,
    HomeComponent,
    RegisterComponent,

    NewsComponent,
    DetailComponent,
    MatchDirective,
    AboutComponent,
    NotfoundComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
