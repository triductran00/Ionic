import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise13Page } from './exercise13.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise13PageRoutingModule {}
