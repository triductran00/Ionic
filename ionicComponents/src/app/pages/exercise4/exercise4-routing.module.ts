import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise4Page } from './exercise4.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise4PageRoutingModule {}
