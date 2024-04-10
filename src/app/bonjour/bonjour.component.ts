import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bonjour',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './bonjour.component.html',
  styleUrl: './bonjour.component.scss',
})
export class BonjourComponent {
  isAdmin: boolean = true;

  handleChangeAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }
}
