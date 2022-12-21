import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ServiceService} from "../productService/service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;

  constructor(private productService: ServiceService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const product = this.getProduct(this.id);

    });
  }

  ngOnInit() {

  }

  getProduct(id: number) {
    // return this.productService.findById(id);
    return this.productService.findById(id).subscribe(product => {
        this.productForm = new FormGroup({
          id: new FormControl(product.id),
          name: new FormControl(product.name),
          price: new FormControl(product.price),
          description: new FormControl(product.description),
        });
      }
    )
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(data => {
      alert('Cập nhật thành công');
      }
    );
  }
}
