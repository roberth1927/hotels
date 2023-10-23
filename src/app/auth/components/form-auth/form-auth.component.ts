import { Component, ViewChild } from '@angular/core';
import { FormLoginComponent } from 'src/app/shared/form-login/form-login.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.scss'],
})
export class FormAuthComponent {
  @ViewChild('loginForm') loginForm!: FormLoginComponent;

  constructor(private authService: AuthService, private router: Router) {}

  handleFormSubmit(formData: any) {
    const { email, password } = formData;
    this.authService.login(email, password).subscribe(
      isLoggedIn => {
        if (isLoggedIn) {
          this.router.navigate(['/dashboard']);
        } else {
          alert('Credenciales incorrectas');
        }
      },
      error => {
        console.error('Error al iniciar sesión:', error);
        alert('Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
      }
    );
  }
}
