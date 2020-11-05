import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL } from '../app.constants';
import { Order, IOrder } from '../shared/model/order.model';
import { Moment } from 'moment';
import { IProduct } from '../shared/model/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public checkoutResourceUrl = SERVER_API_URL + 'api/checkout';

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) { }

  data: any;
  orderId: any;
  products = [];


  ngOnInit(): void {
    var queryParams = this.activatedRoute.queryParams['value']
    var fullUrl = this.checkoutResourceUrl + '?';
    Object.keys(queryParams).forEach(function (key) {
      if (queryParams[key] != '') {
        fullUrl += key + '=' + (queryParams[key] as string) + '&';
      }
    });

    this.http.post(fullUrl, '').toPromise()
      .then(data => {
        this.data = data['data'];
        this.orderId = data['ref']['@ref']['id'];

        var unparesedProducts = data['data']['line'];

        for (const key in unparesedProducts) {
          if (unparesedProducts.hasOwnProperty(key)) {
            this.products.push(
              {
                id: unparesedProducts[key]['product']['@ref']['id'],
                price: unparesedProducts[key]['price'],
                quantity: unparesedProducts[key]['quantity']
              }
            );
          }
        }
      });
  }
}
