import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage58Page } from './sample-page58.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage58Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage58PageRoutingModule {}
