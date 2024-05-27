import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeaFoodPagePage } from './sea-food-page.page';

const routes: Routes = [
  {
    path: '',
    component: SeaFoodPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeaFoodPagePageRoutingModule {}
