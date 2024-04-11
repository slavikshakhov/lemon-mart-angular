import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inventory',
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
        >Inventory Dashboard</a
      >
      <a mat-button routerLink="stock-entry" routerLinkActive="active-link"
        >Stock Entry</a
      >
      <a mat-button routerLink="products" routerLinkActive="active-link"
        >Products</a
      >
      <a mat-button routerLink="categories" routerLinkActive="active-link"
        >Categories</a
      >
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class InventoryComponent {}
