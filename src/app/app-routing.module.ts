import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SkuComponent} from "./sku/sku.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "sku", component: SkuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
