import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';
import { User } from 'src/app/models/user';
import { TweetService } from 'src/app/services/tweet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

user: User [] = [];
searchTerm: string = ""
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
  searchUser(){
    this.service.searchUser(this.searchTerm).subscribe(u => this.user = u);
  }

}
