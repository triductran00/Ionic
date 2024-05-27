import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise12Page } from './exercise12.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise12PageRoutingModule {}
