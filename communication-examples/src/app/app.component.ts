import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'communication-examples';

  currentItem = 'Television';
  secondEx = 'Remote';

  lastChanceItem = 'Beanbag';
  items = ['item1', 'item2', 'item3', 'item4'];
  wishlist = ['Drone', 'Computer'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  crossOffItem(item: string) {
    console.warn(`Parent says: crossing off ${item}.`);
  }
}
