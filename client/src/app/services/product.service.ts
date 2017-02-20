import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cartitem.model';

@Injectable()
export class ProductService {
	private baseUrl: string = 'http://localhost:8080/products';
	private shoppingCart : CartItem[] = [];

	constructor(private http : Http) { }

	getAll(): Observable<Product[]>{
		let product$ = this.http
			.get(`${this.baseUrl}`, {headers: this.getHeaders()}).map(mapProducts);
			return product$;
	}

	get(id: number): Observable<Product>{
		let product$ = this.http.get(`${this.baseUrl}/${id}`, {headers: this.getHeaders()})
										.map(mapProduct);
		return product$;
	}

	private getHeaders(){
		let headers = new Headers();
		headers.append('Accept', 'application/json');
		headers.append('Content-Type', 'application/json')
		return headers;
	}

	 addToCart(product) {
    if ( this.shoppingCart[product.id] == null ){
      this.shoppingCart[product.id] = <CartItem> {
        product: product,
        quantity: 1,
        totalPrice: product.price
      };
    } else {
      this.shoppingCart[product.id].quantity = this.shoppingCart[product.id].quantity + 1;
      this.shoppingCart[product.id].totalPrice = this.shoppingCart[product.id].totalPrice + product.price;
    }
    localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));

    alert(product.name + ' was added to your cart.');
  }
}

function mapProducts(response:Response): Product[]{
   	return response.json().map(toProduct);
}

function mapProduct(response:Response): Product{
   	return toProduct(response.json());
}

function toProduct(r:any): Product{
	let product = <Product>({
		id: r.id,
		name: r.name,
		description: r.description,
		price: r.price
	});
	return product;
}