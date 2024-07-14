import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count = signal(0);

  // count() // value
  // count.set(3)
  // count.update(value => value + 1);


  doubleCount = computed(() =>this.count() * 2)
  // Computed signals react and recalculate when any of its dependent signals change.

  constructor() {
    effect(() => {
      console.log('count updated to:', this.count());
      console.log('doubleCount updated to:', this.doubleCount());
    })
  }

  increment() {
    // Update the signal value
    this.count.update(val => val + 1);
  }

  decrement() {
    // Set the signal value directly
    this.count.update(val => val - 1);
   //  this.count.set(this.count() - 1);
  }
}
