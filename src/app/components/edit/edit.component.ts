import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tweet } from 'src/app/models/tweet';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number = 0;

  currenttweet: Tweet = new Tweet()

  constructor(private service: TweetService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.service.getTweet(this.id).subscribe(t => {
        console.log(t);
        this.currenttweet = t;
    });
  }

  editProduct() {
    console.log("Testing");
    this.service.updateTweet(this.currenttweet).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("/tweet-list");
    })
  }

}
