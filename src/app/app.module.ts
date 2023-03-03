import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { TweetNewComponent } from './components/tweet-new/tweet-new.component';
import { SearchComponent } from './components/search/search.component';
import { EditComponent } from './components/edit/edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TweetHomeComponent } from './components/tweet-home/tweet-home.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    TweetListComponent,
    TweetNewComponent,
    SearchComponent,
    EditComponent,
    NavbarComponent,
    TweetHomeComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
