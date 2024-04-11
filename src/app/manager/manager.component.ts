import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  template: `
    <mat-toolbar color="accent">
      <a mat-button routerLink="home" routerLinkActive="active-link"
        >Manager's Dashboard</a
      >
      <a mat-button routerLink="users" routerLinkActive="active-link"
        >User Management</a
      >
      <a mat-button routerLink="receipts" routerLinkActive="active-link"
        >Receipt Lookup</a
      >
      <a mat-button routerLink="/inventory" routerLinkActive="active-link"
        >Inventory</a
      >
      <a mat-button routerLink="/pos" routerLinkActive="active-link">POS</a>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: `
        .active-link {
        font-weight: bold;
        border-bottom: 2px solid #005005;
      }`,
})
export class ManagerComponent {}
