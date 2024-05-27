import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise9Page } from './exercise9.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise9PageRoutingModule {}
