import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private hide: boolean = true;
  private error: string = "";
  private form: FormGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  constructor(private authService: AuthService) { }

  get username() { return this.form.get("username") }
  get password() { return this.form.get("password") }
  
  getErrorMessage(formControlName: string): string {
    return this.form.get(formControlName).hasError("required") ? "Preencha este campo" : "";
  }

  submit() {
    this.authService.login(this.form.value);
  }
}
