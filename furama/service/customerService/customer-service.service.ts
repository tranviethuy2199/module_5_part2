import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../../model/Customer";
import {CustomerType} from "../../model/CustomerType";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private customer: Customer[] = [];
  private customerType : CustomerType[] = [];

  constructor(private httpClient : HttpClient) {}

  findAllCustomer():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(
      environment.API_CUSTOMER + "?_sort=name&_order=desc&_page="
    );
  }

  findAllCustomerType():Observable<CustomerType[]>{
    return this.httpClient.get<CustomerType[]>(
      environment.API_CUSTOMER_TYPE
    )
  }

  findById(id : number):Observable<Customer>{
    return this.httpClient.get<Customer>(environment.API_CUSTOMER + "/" + id);
  }


  editCustomer(id:number , customer:Customer):Observable<Customer>{
    return this.httpClient.put<Customer>(
      environment.API_CUSTOMER + "/" + id , customer
    )
  }




}
