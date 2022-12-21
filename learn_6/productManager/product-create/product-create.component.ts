import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from "../../../practice/module/IStudent";
import {Product} from "../../module/Product";
import {ServiceService} from "../productService/service.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  @Output('newProduct') onCreate = new EventEmitter<Product>();

  constructor(private productService: ServiceService,
              private router: Router) {
  }

  product: Product | undefined;
  rfProduct: FormGroup;

  ngOnInit(): void {
  }



  onSubmit(){
    if (this.rfProduct.valid){
      this.productService.saveProduct(this.rfProduct.value).subscribe(
        data => {
          this.router.navigateByUrl("product/list");
        }
      )
    }
  }

  createProduct(name: string, price: string, description: string) {
    this.product = {name : name , price : parseInt(price) , description:description}
    console.log(this.product)
    this.productService.saveProduct(this.product).subscribe(data =>{
      this.router.navigateByUrl("product/list")
    })

  }
}
