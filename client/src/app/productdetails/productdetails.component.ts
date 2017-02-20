import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit, OnDestroy {

  product: Product;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private productService : ProductService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.productService.get(id).subscribe(p => this.product = p);
    });
    console.log(this.product);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  addToCart(product) {
    this.productService.addToCart(product);
  }

}
