import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise1Page } from './exercise1.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise1PageRoutingModule {}
