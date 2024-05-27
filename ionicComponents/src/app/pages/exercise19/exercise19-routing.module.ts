import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise19Page } from './exercise19.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise19PageRoutingModule {}
