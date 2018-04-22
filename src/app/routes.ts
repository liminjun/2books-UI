import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// import { SignInComponent } from './users/sign-in.component';
// import { RegisterComponent } from './users/register.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'books', component: HomeComponent, },
  { path: 'users', component: HomeComponent, },
  { path: 'news', component: HomeComponent, },
  { path: 'login', component: LoginComponent, },
  { path: 'logout', component: HomeComponent, },
  { path: 'register', component: RegisterComponent, },

  { path: 'about', component: AboutComponent, },
  { path: 'feedback', component: FeedbackComponent, },
//   { path: "users", loadChildren: "app/users/users.module#UsersModule" }
];
