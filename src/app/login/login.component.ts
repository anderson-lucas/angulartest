import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private error: string = "";
  private form: FormGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submit() {
    if (!this.authService.login(this.form.value)) {
      this.error = "Usuário ou senha incorretos!";
    }
  }
}
