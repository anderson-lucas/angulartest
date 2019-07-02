import { Component, OnInit } from '@angular/core';
import { AuthService, IUser } from '../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  private user: IUser;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user = this.authService.getLoggedUser();
  }
}
