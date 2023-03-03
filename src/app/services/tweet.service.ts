import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../models/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  searchUsers(searchTerm: string) {
    throw new Error('Method not implemented.');
  }
  baseURL: string = "https://localhost:4200/api";
  tokenKey: string = "myTweetToken";

  pastTweets: any[] = [
    
  ]

  constructor(private http: HttpClient) { }

  getAllTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(`${this.baseURL}/tweet`);
}

  getTweet(tweetId: number): Observable<Tweet> {
    return this.http.get<Tweet>(`${this.baseURL}/tweet/${tweetId}`);
  }

  createTweet(newTweet: Tweet): Observable<Tweet> {
   
    
    return this.http.post<Tweet>(`${this.baseURL}/tweet`, newTweet);
}

  updateTweet(updatedTweet: Tweet): Observable<Tweet> {
    return this.http.put<Tweet>(`${this.baseURL}/tweet/${updatedTweet.id}`, updatedTweet);

  }

  deleteTweet(tweetId: number): Observable<Tweet>{
    return this.http.delete<Tweet>(`${this.baseURL}/tweet/${tweetId}`);

  }

  searchTweet(searchTerm: string): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.baseURL + "?q=" + searchTerm);
  }
}