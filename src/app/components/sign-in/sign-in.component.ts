import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  newUser: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    this.userService.signIn(this.newUser).subscribe(() => {
        window.alert("Logged In Successfully");
        this.router.navigate(['tweet-list']);
    }, (error: any) => {
        window.alert("User Sign In Error");
        console.log('Error: ', error)
    });

  }
}
