import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-success-component',
  templateUrl: './success-component.component.html',
  styleUrls: ['./success-component.component.css']
})
export class SuccessComponentComponent implements OnInit {

  constructor(
    private router: Router,
    private product_service: ProductService
  ) { }

  ngOnInit(): void {
  }

  goBackToHome() {
    this.product_service.clearProducts();
    this.router.navigate(['/login']);
  }

}
