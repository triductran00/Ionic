import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise18Page } from './exercise18.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise18PageRoutingModule {}
