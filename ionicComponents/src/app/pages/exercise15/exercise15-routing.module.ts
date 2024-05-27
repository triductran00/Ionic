import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise15Page } from './exercise15.page';

const routes: Routes = [
  {
    path: '',
    component: Exercise15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise15PageRoutingModule {}
