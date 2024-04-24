import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
dataUser: any;
element: any;
productList!: any[];
products: any[] = [];
selectedProduct!: any;
subTotal!: any;
  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private product_service: ProductService) { }

  ngOnInit(): void {
    this.afAuth.currentUser.then(user =>{
      if(user && user.emailVerified){
        this.dataUser = user;
      }else{
        this.router.navigate(['/login']);
      }
    })

    this.product_service.getAllProducts().subscribe({
      next: (res: any) =>{
        console.log(res);
        this.productList = res;
      },
      error: (error) => {
        alert(error);
      },
      complete:() =>{
        console.log('Request Completed');
      },
    });

    this.product_service.loadCart();
    this.products = this.product_service.getProduct();
    console.log(this.products);

  }

 // Add product to cart
 addToCart(product: any) {
  if (!this.product_service.productInCart(product)) {
    product.quantity = 1;
    this.product_service.addToCart(product);
    this.products = [...this.product_service.getProduct()];
    this.subTotal = product.price;
  }
}

//Remove a Product from Cart
removeFromCart(product: any) {
  this.product_service.removeProduct(product);
  this.products = this.product_service.getProduct();

  console.log(this.products);
}

// Calculate total
get total() {
  return this.products?.reduce(
    (sum, product) => ({
      quantity: 1,
      price: sum.price + product.quantity * product.price,
    }),
    { quantity: 1, price: 0 }
  ).price;
}


 //Change sub total amount
  // changeSubTotal(product: any, index: any) {
  //   const qty = product.quantity;
  //   const amt = product.price;

  //   this.subTotal = amt * qty;

  //   this.product_service.saveCart();
  // }

checkout() {
  localStorage.setItem('cart_total', JSON.stringify(this.total));
  this.router.navigate(['/payment']);
}

  logOut(){
    this.afAuth.signOut().then(() =>this.router.navigate(['/login']));
  }
  
  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
  }

}
