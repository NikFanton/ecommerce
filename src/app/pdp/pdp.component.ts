import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IProduct } from '../shared/model/product.model';
import { SERVER_API_URL } from '../app.constants';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css']
})
export class PdpComponent implements OnInit {

  public resourceUrl = SERVER_API_URL + 'api/products';

  products: IProduct[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
}
