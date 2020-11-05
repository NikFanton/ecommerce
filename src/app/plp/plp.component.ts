import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { IProduct, Product } from '../shared/model/product.model';
import { SERVER_API_URL } from '../app.constants';


@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.css']
})
export class PLPComponent implements OnInit {
  public productsResourceUrl = SERVER_API_URL + 'api/products';
  public checkoutResourceUrl = SERVER_API_URL + 'api/checkout';

  products: IProduct[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.http.get(this.productsResourceUrl).toPromise()
      .then(data => {
        var unparesedProducts = data['data'];

        for (const key in unparesedProducts) {
          if (unparesedProducts.hasOwnProperty(key)) {
            var product = unparesedProducts[key]['data'];
            product.id = unparesedProducts[key]['ref']['@ref']['id'];
            this.products.push(product);
          }
        }
      });
  }


  private createFromForm(): number[] {

    return [];
  }

  validateUnsighedInt(e) {
    var ev = e || window.event;
    var key = ev.keyCode || ev.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]/;
    if (!regex.test(key)) {
      ev.returnValue = false;
      if (ev.preventDefault) ev.preventDefault();
    }
  }

  completeOrder() {
    // this.submitOrder(this.createFromForm());

  //   fetch('/', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //         user: {
  //             name: "John",
  //             email: "john@example.com"
  //         }
  //     })
  // });

    console.log("TESTED")
    this.http.post(this.checkoutResourceUrl, 'TESTED').toPromise()
      .then(data => {

      });

  }

  submitOrder(productsIds: number[]) {
    console.log(productsIds);
    // this.http.get(this.resourceUrl + 'submit').toPromise()
    //   .then(data => {
    //     var unparesedProducts = (<any>data).data;

    //     for (const key in unparesedProducts) {
    //       if (unparesedProducts.hasOwnProperty(key)) {
    //         this.products.push(unparesedProducts[key].data);
    //       }
    //     }
    //   });
  }
}
