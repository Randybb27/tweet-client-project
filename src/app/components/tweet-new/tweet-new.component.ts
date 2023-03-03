import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from 'src/app/models/tweet';
import { User } from 'src/app/models/user';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-tweet-new',
  templateUrl: './tweet-new.component.html',
  styleUrls: ['./tweet-new.component.css']
})
export class TweetNewComponent implements OnInit {
  http: any;
  user: User [] = [];
  newTweet: Tweet = new Tweet();
  allTweet: Tweet [] = []
  constructor(private service: TweetService) { }

  ngOnInit(): void {
    this.service.getAllTweets().subscribe(p => this.allTweet = p)
  }

  createTweet(newTweet: Tweet) {
   
    
    return this.service.createTweet(this.newTweet).subscribe(s => { this.service.getAllTweets().subscribe(p => this.allTweet = p)});
}

getTweet(tweetId: string) {
  return this.http.get(`${this.baseURL}/${tweetId}`);
}
  baseURL(baseURL: any, newTweet: Tweet) {
    throw new Error('Method not implemented.');
  }

  getAllTweets(): Observable<Tweet[]> {
    return this.service.getAllTweets();
}

}
