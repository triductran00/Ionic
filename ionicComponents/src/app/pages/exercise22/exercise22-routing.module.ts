import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise22Page } from './exercise22.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise22PageRoutingModule {}
