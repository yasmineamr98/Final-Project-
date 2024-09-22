import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { UserLoginComponent } from '../../user/user-login/user-login.component';
import { UserRegisterComponent } from '../../user/user-register/user-register.component';
import { UserProfileComponent } from '../../user/user-profile/user-profile.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// const routes: Routes = [
//   { path: '/home', component: HomeComponent },
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: '/user-login', component: UserLoginComponent },
//   { path: '/user-register', component: UserRegisterComponent },
//   { path: '/user-profile', component: UserProfileComponent },
// ];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
