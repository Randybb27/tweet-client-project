import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from 'src/app/models/tweet';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-tweet-home',
  templateUrl: './tweet-home.component.html',
  styleUrls: ['./tweet-home.component.css']
})
export class TweetHomeComponent implements OnInit {
  
  // baseURL: string = "http://localhost:3000";
allTweet: Tweet [] = []
  constructor(private service: TweetService){}
  
  ngOnInit(): void {
    this.service.getAllTweets().subscribe(p => this.allTweet = p)
  }

  // getTweet(tweetId: string) {
  //   return this.http.get(`${this.baseURL}/${tweetId}`);
  // }

  getAllTweets(): Observable<Tweet[]> {
    return this.service.getAllTweets();
}
}
