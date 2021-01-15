import { Injectable } from '@angular/core';
import {Item} from "../classes/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public items: Item[] = [];
  constructor() { }


  getItems(){
    if (localStorage.getItem('items')) {
      this.items = JSON.parse(localStorage.getItem('items'));
    }
  }

  saveItems(){
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  getItem(id:string){
    return this.items.find(item => item.id === id);
  }

  addItem(item: Item){
    this.items.push(item);
    this.saveItems();
  }

  deleteItem(item: Item){
    this.items.splice(this.items.indexOf(item), 1);
    this.saveItems();
  }

}
