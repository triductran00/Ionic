import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage55Page } from './sample-page55.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage55Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage55PageRoutingModule {}
