import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { ClienteHomeComponent } from './pages/cliente-home/cliente-home.component'; // Asegúrate de importar correctamente

@NgModule({
  declarations: [
    AppComponent,
    ClienteHomeComponent, // Agregar solo los componentes no Standalone aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DashboardComponent, // Importa directamente los Standalone Components aquí
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




