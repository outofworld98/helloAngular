import { Component, OnInit } from '@angular/core';
import {ItemService} from "../services/item.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private itemService: ItemService,
              private router: Router) {
    this.itemService = itemService;
    this.router = router;
  }

  ngOnInit(): void {
    this.itemService.getItems();
  }


  updateItem(id: string) {
    this.router.navigateByUrl('item/' + id);
  }
}
