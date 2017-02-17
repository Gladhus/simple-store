import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Product } from './models/product.model';

@Injectable()
export class ProductService {
	private baseUrl: string = 'http://localhost:8080/products';
	constructor(private http : Http) { }

	getAll(): Observable<Product[]>{
		let product$ = this.http
			.get(`${this.baseUrl}`, {headers: this.getHeaders()}).map(mapProducts);
			return product$;
	}

	private getHeaders(){
		let headers = new Headers();
		headers.append('Accept', 'application/json');
		headers.append('Content-Type', 'application/json')
		return headers;
	}
}

function mapProducts(response:Response): Product[]{
   	return response.json().map(toProduct);
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