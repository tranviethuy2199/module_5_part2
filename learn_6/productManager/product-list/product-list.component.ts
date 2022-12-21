import {Component, OnInit} from '@angular/core';
import {Product} from "../../module/Product";
import {ServiceService} from "../productService/service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  p: number = 1;
  nameSearch = FormGroup;

  constructor(private productService: ServiceService,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.productService.getAll().subscribe(
      data => {
        this.products = data;
      }, error => {
        console.log("lay danh sac that bai")
      }, () => {
        console.log("ket thuc")
      }
    )
  }

  ngOnInit(): void {
    this.products = this.productService.products;
    // this.nameSearch = this.formBuilder.group({nameSearch: ['']})
  }


  // searchByMore() {
  //
  //   this.productService.findAllProductSearch(this.nameSearch.value).subscribe(data => {
  //     this.products = data;
  //   })
  // }

}
