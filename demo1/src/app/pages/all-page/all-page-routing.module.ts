import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPagePage } from './all-page.page';

const routes: Routes = [
  {
    path: '',
    component: AllPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllPagePageRoutingModule {}
