import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Guardar el token y redirigir al dashboard
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Mostrar mensaje de error
        this.errorMessage = 'Credenciales incorrectas. Intenta nuevamente.';
        
        // Hacer que el mensaje desaparezca después de 5 segundos
        setTimeout(() => {
          this.errorMessage = '';  // Limpiar el mensaje después de 5 segundos
        }, 4000);
      }
    );
  }
}

