import { Component, OnInit } from '@angular/core';

import { Product } from  '../models/product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor() { }

  products: Product[] = [
  	{id: 1, name: 'Cafe', description: 'Cafe du depanneur du coin', price: 2.5},
  	{id: 2, name: 'Jus', description: 'Jus du depanneur du coin', price: 3.5}
  ];

  ngOnInit() {
  }

}
