import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage65Page } from './sample-page65.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage65Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage65PageRoutingModule {}
