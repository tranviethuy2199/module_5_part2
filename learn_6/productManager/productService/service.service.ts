import { Injectable } from '@angular/core';
import {Product} from "../../module/Product";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Customer} from "../../../crudText/model/customer";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private api_url = 'http://localhost:3000/product';
  private _products: Product[] = [
  //   {
  //   id: 1,
  //   name: 'IPhone 12',
  //   price: 2400000,
  //   description: 'New'
  // }, {
  //   id: 2,
  //   name: 'IPhone 11',
  //   price: 1560000,
  //   description: 'Like new'
  // }, {
  //   id: 3,
  //   name: 'IPhone X',
  //   price: 968000,
  //   description: '97%'
  // }, {
  //   id: 4,
  //   name: 'IPhone 8',
  //   price: 7540000,
  //   description: '98%'
  // }, {
  //   id: 5,
  //   name: 'IPhone 11 Pro',
  //   price: 1895000,
  //   description: 'Like new'
  // }
  ];

  constructor(private _httpClient:HttpClient) { }


  get products(): Product[] {
    return this._products;
  }


  set products(value: Product[]) {
    this._products = value;
  }

  getAll(): Observable<Product[]> {
    // return this.products;
    return this._httpClient.get<Product[]>(
      environment.api_url + "?_sort=name&_order=desc&_page="
    );
  }

  saveProduct(product):Observable<Product> {
    // this.products.push(product);
    return this._httpClient.post<Product>(
      environment.api_url,product
    )
  }

  findAllProductSearch(nameSearch: any): Observable<Product[]> {
    return this._httpClient.get<Product[]>(this.api_url +
      '?name_like=' + nameSearch);

  }


  findById(id: number):Observable<Product> {
    return this._httpClient.get<Product>(
      environment.api_url + "/" + id
    )
    // return this._products.find(product => product.id === id);
  }

  deleteProduct(id: number):Observable<Product> {
    return this._httpClient.delete<Product>(
      environment.api_url + "/" +id
    )
    // this._products = this._products.filter(product => {
    //   return product.id !== id;
    // });
  }

  updateProduct(id: number, product: Product):Observable<Product> {
    return this._httpClient.put<Product>(
      environment.api_url + "/" + id , product
    )
    // for (let i = 0; i < this._products.length; i++) {
    //   if (this._products[i].id === id) {
    //     this._products[i] = product;
    //   }
    // }
  }
}
