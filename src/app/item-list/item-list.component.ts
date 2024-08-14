import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { Item } from '../../model';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0, transform: 'translateY(10px)' }))
      ])
    ])
  ]
})
export class ItemListComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();

  }
  deleteItem(id: number) {
    this.itemService.deleteItem(id);
    this.items = this.itemService.getItems();
  }

  editItem(item:any){

  }
}
