import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from 'src/app/models/tweet';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {
  allTweet: Tweet [] = []
  // baseURL: string = "http://localhost:3000";

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

deleteTweet(id:number){
  console.log("Testing"+ id);
 this.service.deleteTweet(id).subscribe(response => {
console.log(response);
this.ngOnInit();
 })
}
}