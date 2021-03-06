import { PdpComponent as PDPComponent } from './pdp/pdp.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PLPComponent } from './plp/plp.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'plp', component: PLPComponent },
  { path: 'pdp', component: PDPComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
