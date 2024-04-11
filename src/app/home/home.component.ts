import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  template: `
    <button mat-button routerLink="/manager">Manager</button>
    <button mat-button routerLink="/inventory">Inventory</button>
    <button mat-button routerLink="/pos">POS</button>
  `,
  styles: ``,
})
export class HomeComponent {}
