import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { TweetNewComponent } from './components/tweet-new/tweet-new.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditComponent } from './components/edit/edit.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { TweetHomeComponent } from './components/tweet-home/tweet-home.component';

const routes: Routes = [
  { 
    path: "",
    redirectTo: "/signin",
    pathMatch: "full"
  },
  {
    path: "signin",
    component: SignInComponent
  },
  {
    path: "signup",
    component: SignUpComponent
  },
  // {
  //   path: "tweet",
  //   component: TweetComponent
  // },
  {
    path: "tweet/new",
    component: TweetNewComponent
  },
  {
    path: "tweet-list",
    component: TweetListComponent
  },
  // {
  //   path: "profile",
  //   component: ProfileComponent
  // },
  // {
  //   path: "tweet-home",
  //   component: TweetHomeComponent
  // },
  {
    path: "search",
    component: SearchComponent
  },
  { path: "edit/:id", component: EditComponent },
  {path: "app-navbar", component: NavbarComponent},
  {path: "user-info", component: UserInfoComponent},
  {path: "tweet-home", component: TweetHomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
