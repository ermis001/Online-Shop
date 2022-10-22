import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  data: any;
  productTable: any;

  constructor(private getProd: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.getProd.getProduct().subscribe((result) => {
      this.productTable = result;
    });
  }

  deleteProduct(id: number) {
    this.getProd.deleteProduct(id).subscribe(() => {
      this.getProduct();
    });
  }
}
