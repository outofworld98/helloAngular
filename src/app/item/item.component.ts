import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Item} from "../classes/item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  private route: ActivatedRoute;
  private router: Router;
  private item: Item;
  private editable: boolean = false;

  constructor(route: ActivatedRoute,
              router: Router) {
    this.route = route;
    this.router = router;
    this.item={
      id:'',
      name:'',
      available: true
    }
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editable = true;
    }
  }

  saveItem() {
    console.log(this.item);
    if (this.editable) {

    } else {

    }
    this.router.navigateByUrl('/home');
  }

  deleteItem() {
    this.router.navigateByUrl('/home');
  }
}
