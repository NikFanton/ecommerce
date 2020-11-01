import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

// type EntityArrayResponseType = HttpResponse<IEmail[]>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ecommerce';
  items = [];

  constructor(private http: HttpClient) {
    // this.http.get('http://localhost:4200/api/products/').toPromise()
    //   .then(data => {
    //     console.log("TESTED");
        
    //     console.log(data);
    //     // for (const key in data) {
    //     //   if (data.hasOwnProperty(key)) {
    //     //     this.items.push(data[key]);
    //     //   }
    //     // }
    //   });
  }

  // query(req?: any): Observable<EntityArrayResponseType> {
  // }
  
}
