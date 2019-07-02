import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

interface IUserLogin {
  username: string;
  password: string;
};

export interface IUser {
  nome: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private notificationService: NotificationService) { }

  login(obj: IUserLogin): boolean {
    if (obj.username === "admin" && obj.password === "123") {
      const user: IUser = { nome: "Anderson"};
      localStorage.setItem("loggedUser", JSON.stringify(user));
      this.router.navigate(["/home"]);
      return true;
    }

    this.notificationService.error("Usuário ou senha incorretos");
    return false;
  }

  logout(): void {
    localStorage.removeItem("loggedUser");
    this.router.navigate(["/login"]);
  }

  getLoggedUser(): IUser {
    return JSON.parse(localStorage.getItem("loggedUser"));
  }
}
