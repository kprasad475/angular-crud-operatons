import { Injectable } from '@angular/core';
import { Item } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[] = [
    { id: 1, name: 'Item 1', description: 'This is item 1' },
    { id: 2, name: 'Item 2', description: 'This is item 2' },
    { id: 3, name: 'Item 3', description: 'This is item 3' },
  ];
  constructor() { }

  getItems():Item[]{
    return this.items
  }

  addItem(item:Item){
    item.id = this.items.length+1;
    this.items.push(item)
  }

  updateItem(item:Item){
    const index = this.items.findIndex(i => i.id === item.id);
    if (index > -1) {
      this.items[index] = item;
    }
}

deleteItem(id:number){
  this.items = this.items.filter(item =>item.id != id )
}
}
