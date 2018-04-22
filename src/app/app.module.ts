import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
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
import { NavBarComponent } from './core/nav-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoreModule} from "./core/core.module";
import { appRoutes } from './routes';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
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
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule,
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
