import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  private route: ActivatedRoute;
  private editable: boolean = false;
  private router: Router;

  constructor(route: ActivatedRoute,
              router: Router) {
    this.route = route;
    this.router = router;
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editable = true;
    }
  }

  saveItem() {
    if (this.editable) {

    } else {

    }
    this.router.navigateByUrl('/home');
  }

  deleteItem() {

  }
}
