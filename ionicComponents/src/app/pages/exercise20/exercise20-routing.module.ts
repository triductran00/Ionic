import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise20Page } from './exercise20.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise20PageRoutingModule {}
