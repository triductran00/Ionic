import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FastFoodPagePage } from './fast-food-page.page';

const routes: Routes = [
  {
    path: '',
    component: FastFoodPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FastFoodPagePageRoutingModule {}
