import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise23Page } from './exercise23.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise23PageRoutingModule {}
