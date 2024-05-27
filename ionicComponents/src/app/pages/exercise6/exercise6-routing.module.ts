import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise6Page } from './exercise6.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise6PageRoutingModule {}
