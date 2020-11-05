import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL } from '../app.constants';

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

  ngOnInit(): void {
    
  }

}
