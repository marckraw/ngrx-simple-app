import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  public loginForm = this.fb.group({
    username: ['', Validators.compose([
      Validators.required,
      Validators.email])],
    password: ['', Validators.required]
  })

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  login() {
    // TODO: Auth
    console.log("Login");
    this.router.navigate(['/']);
  }

}
