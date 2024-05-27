import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage23Page } from './sample-page23.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage23PageRoutingModule {}
