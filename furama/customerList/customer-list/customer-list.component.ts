import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/Customer";
import {CustomerType} from "../../model/CustomerType";
import {CustomerServiceService} from "../../service/customerService/customer-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customer:Customer[] = [];
  customerType : CustomerType[] = [];
  p: number = 1;
  customerFormGroup: FormGroup
  id: number;

  cpCustomerType(o1: CustomerType , o2: CustomerType){
    return o1.id == o2.id;
  }


  constructor(private customerService : CustomerServiceService,
              private formBuilder:FormBuilder,
              private router:Router,
              private activateRouter : ActivatedRoute) {
    this.customerService.findAllCustomer().subscribe(data =>{
      this.customer = data;
    },error => {
      console.log(" lấy danh sách thất bại")
      },() =>{
      console.log("kết thúc")
      }
    )


    this.customerFormGroup = this.formBuilder.group({
      id:[''],
      name:[''],
      birthday:[''],
      identityCard:[''],
      phoneNumber:[''],
      email:[''],
      customerType:[''],
      address:['']
    })
  }



  ngOnInit(): void {
    this.customerService.findAllCustomerType().subscribe(data =>{
      this.customerType = data;
    })

  }


  getById(id:number){
    return this.customerService.findById(id).subscribe(data =>{
      console.log(id)
      this.customerFormGroup = this.formBuilder.group({
        id:[data.id],
        name:[data.name],
        birthday:[data.birthday],
        identityCard:[data.identityCard],
        phoneNumber:[data.phoneNumber],
        email:[data.email],
        customerType:[data.customerType],
        address:[data.address]
      })
    })
  }

  updateCustomer(id: number) {
    console.log(id)
    const customer = this.customerFormGroup.value;
    this.customerService.editCustomer(id,customer).subscribe(data =>{
      alert('chỉnh sửa thành công')
    })

  }
}
