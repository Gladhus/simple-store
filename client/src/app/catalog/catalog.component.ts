import { Component, OnInit } from '@angular/core';

import { Product } from  '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

	products : Product[] = [];

  	constructor(private productService : ProductService) { }

  	ngOnInit() {
  		this.productService.getAll().subscribe(products => this.products = products);
  	}

  	addToCart(product) {
  		alert(product.name + ' was added to cart.');
  	}

}
