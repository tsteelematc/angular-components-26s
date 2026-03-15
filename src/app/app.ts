import { Component, signal } from '@angular/core';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';
import { ZsmuckerbryanChecklist } from './zsmuckerbryan-checklist/zsmuckerbryan-checklist';

@Component({
  selector: 'app-root',
  imports: [
    PizzaToppings,
    ZsmuckerbryanChecklist
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-components');
}
