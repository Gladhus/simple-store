import { Component, OnInit } from '@angular/core';

import { Product } from  '../models/product.model';
import { CartItem } from '../models/cartitem.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products : Product[] = [];
  shoppingCart : CartItem[] = [];

  constructor(private productService : ProductService) {  }

  ngOnInit() {
    this.productService.getAll().subscribe(products => this.products = products);

    var storageCart = JSON.parse(localStorage.getItem("shoppingCart"));
    if (storageCart != null){
      this.shoppingCart = storageCart;
    }
  }

  addToCart(product) {
    this.productService.addToCart(product);
  }
}
