import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// import { SignInComponent } from './users/sign-in.component';
// import { RegisterComponent } from './users/register.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'books', component: HomeComponent, },
  { path: 'users', component: HomeComponent, },
  { path: 'news', component: HomeComponent, },
  { path: 'login', component: HomeComponent, },
  { path: 'logout', component: HomeComponent, },
  { path: 'register', component: HomeComponent, },

  { path: 'about', component: HomeComponent, },
  { path: 'feedback', component: HomeComponent, },
//   { path: "users", loadChildren: "app/users/users.module#UsersModule" }
];
