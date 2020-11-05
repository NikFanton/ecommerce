import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { IProduct } from '../shared/model/product.model';
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
}
