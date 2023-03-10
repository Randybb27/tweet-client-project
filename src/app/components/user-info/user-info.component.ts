import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input()
  userName: string = '';

  @Input()
  firstName: string = '';

  @Input()
  lastName: string = ''
  constructor() { }

  ngOnInit(): void {
  }
}
